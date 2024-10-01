import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { rm } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    const pathToFile = join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await rm(pathToFile);
    } catch {
        throw Error('FS operation failed');
    }
};

await remove();