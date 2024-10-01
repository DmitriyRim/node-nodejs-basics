import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const data = 'I am fresh and young';
    
    try {
        await writeFile(join(__dirname, 'files', 'fresh.txt'), data, {flag: 'wx'});
    } catch (err) {
        throw Error('FS operation failed');
    }
};

await create();