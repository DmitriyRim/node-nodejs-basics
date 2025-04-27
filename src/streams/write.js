import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const pathToFile = join(__dirname, 'files', 'fileToWrite.txt');
    const write = createWriteStream(pathToFile);

    process.stdin.pipe(write);
};

await write();