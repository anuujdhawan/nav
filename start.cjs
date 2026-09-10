const fs = require('fs');
const http = require('http');
const path = require('path');

const standaloneServer = path.join(__dirname, '.next', 'standalone', 'server.js');

function parseEnvFile(content) {
  const values = {};

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (!line || line.startsWith('#')) {
      continue;
    }

    const normalizedLine = line.startsWith('export ') ? line.slice(7).trim() : line;
    const separatorIndex = normalizedLine.indexOf('=');

    if (separatorIndex === -1) {
      continue;
    }

    const key = normalizedLine.slice(0, separatorIndex).trim();
    let value = normalizedLine.slice(separatorIndex + 1).trim();

    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(key)) {
      continue;
    }

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    values[key] = value;
  }

  return values;
}

function loadRootEnv() {
  const envFiles = ['.env'];

  for (const envFile of envFiles) {
    const envPath = path.join(__dirname, envFile);

    if (!fs.existsSync(envPath)) {
      continue;
    }

    const envValues = parseEnvFile(fs.readFileSync(envPath, 'utf8'));

    for (const [key, value] of Object.entries(envValues)) {
      if (process.env[key] === undefined) {
        process.env[key] = value;
      }
    }
  }
}

function syncStandaloneAssets() {
  const standaloneRoot = path.join(__dirname, '.next', 'standalone');
  const sourceStatic = path.join(__dirname, '.next', 'static');
  const targetStatic = path.join(standaloneRoot, '.next', 'static');
  const sourcePublic = path.join(__dirname, 'public');
  const targetPublic = path.join(standaloneRoot, 'public');

  if (fs.existsSync(sourceStatic)) {
    fs.mkdirSync(path.dirname(targetStatic), { recursive: true });
    fs.cpSync(sourceStatic, targetStatic, { recursive: true, force: true });
  }

  if (fs.existsSync(sourcePublic)) {
    fs.cpSync(sourcePublic, targetPublic, { recursive: true, force: true });
  }
}

loadRootEnv();

const port = parseInt(process.env.PORT || '3000', 10);
const host = process.env.HOSTNAME || '0.0.0.0';

if (fs.existsSync(standaloneServer)) {
  syncStandaloneAssets();
  process.env.HOSTNAME = '0.0.0.0';
  require(standaloneServer);
} else {
  const next = require('next');
  const app = next({
    dev: false,
    hostname: host,
    port,
  });

  const handle = app.getRequestHandler();

  app
    .prepare()
    .then(() => {
      http
        .createServer((req, res) => {
          handle(req, res);
        })
        .listen(port, host, () => {
          console.log(`Next app running on http://${host}:${port}`);
        });
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
