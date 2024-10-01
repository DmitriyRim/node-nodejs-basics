import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const pathToFile = join(__dirname, 'files', 'fileToRead.txt');

    try {
        const data = await readFile(pathToFile, { encoding: 'utf8' });

        console.log(data);
    } catch {
        throw Error('FS operation failed');
    }
};

await read();