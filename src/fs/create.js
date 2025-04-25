import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const text = 'I am fresh and young';
    const errorMessage = 'FS operation failed';

    try {
       await writeFile(join(__dirname, 'files', 'fresh.txt'), text, { flag: 'wx' });
    } catch {
        throw Error(errorMessage);
    }
};

await create();