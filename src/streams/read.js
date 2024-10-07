import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import os from 'node:os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const input = createReadStream(join(__dirname, 'files', 'fileToRead.txt'), { encoding: 'utf8'});

    input.on('readable', () => {
        const data = input.read();

        data ? stdout.write(data) : stdout.write(os.EOL);
    })
};

await read();