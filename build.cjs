const { spawnSync } = require('child_process');

const nextBin = require.resolve('next/dist/bin/next');

const result = spawnSync(process.execPath, [nextBin, 'build'], {
  stdio: 'inherit',
  env: process.env,
});

process.exit(result.status ?? 1);
