import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rm } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    const pathToFile = join(__dirname, 'files', 'fileToRemove.txt');
    const errorMessage = 'FS operation failed';

    try {
        await rm(pathToFile)
    } catch {
        throw new Error(errorMessage);
    }
};

await remove();