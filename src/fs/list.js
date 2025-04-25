import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    const pathToFolder = join(__dirname, 'files');
    const errorMessage = 'FS operation failed';

    try {
        const names = await readdir(pathToFolder);
        console.log(names.join('\n'))
    } catch {
        throw new Error(errorMessage);
    }
};

await list();