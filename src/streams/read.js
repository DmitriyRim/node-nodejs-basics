import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const pathToFile = join(__dirname, 'files', 'fileToRead.txt');
    const read = createReadStream(pathToFile);

    read.pipe(process.stdout);
    read.on('end', () => {
        console.log('\n');
    })
};

await read();