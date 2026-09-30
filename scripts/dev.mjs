import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
const incoming = process.argv.slice(2);
const supervised = incoming.includes('--strictPort');
// The supervised recording preview serves the verified static build.
// Normal `npm run dev` keeps the complete Next development experience.
const staticPreview = supervised && existsSync('out/index.html');
const portIndex = incoming.indexOf('--port');
const port = portIndex >= 0 ? incoming[portIndex + 1] : '3000';
const args = incoming.filter(arg => arg !== '--strictPort').map(arg => arg === '--host' ? '--hostname' : arg);
const command = staticPreview ? ['scripts/serve.mjs'] : ['node_modules/next/dist/bin/next', 'dev', '--webpack', ...args];
const child = spawn(process.execPath, command, { stdio: 'inherit', env: { ...process.env, ...(staticPreview ? { PORT: port } : {}) } });
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
child.on('exit', code => process.exit(code ?? 0));
