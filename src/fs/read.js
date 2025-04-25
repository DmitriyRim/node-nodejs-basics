import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const pathToFile = join(__dirname, 'files', 'fileToRead.txt');
    const errorMessage = 'FS operation failed';
    
    try {
        const data = await readFile(pathToFile, { encoding: 'utf8' });
        console.log(data);
    } catch {
        throw new Error(errorMessage);
    }
};

await read();