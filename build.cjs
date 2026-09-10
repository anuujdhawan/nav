const { spawnSync } = require('child_process');

const nextBin = require.resolve('next/dist/bin/next');

// cPanel/Passenger environments can restrict Turbopack's internal worker port.
// Webpack provides a predictable production build for shared hosting.
const result = spawnSync(process.execPath, [nextBin, 'build', '--webpack'], {
  stdio: 'inherit',
  env: process.env,
});

process.exit(result.status ?? 1);
