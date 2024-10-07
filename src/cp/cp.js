import { spawn } from 'node:child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const spawnChild = spawn(`node ${join(__dirname, 'files', 'script.js')}`, [...args], { shell: true });

    spawnChild.stdin.write('Hello. I am from main process!');

    spawnChild.stdout.on('data', (data) => {
        console.log(data.toString())
    })

    spawnChild.on('error', (data) => {
        console.error(`stderr: ${data}`);
    });
};

spawnChildProcess(['12', '23']);