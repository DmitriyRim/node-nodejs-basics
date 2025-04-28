import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const pathToFile = join(__dirname, 'files', 'script.js');
    const childProcess = spawn('node', [pathToFile, ...args]);

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);