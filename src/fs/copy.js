import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { cp } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const folderName = 'files';
    const copyFolderName = `${folderName}_clone`;

    try {
        await cp(
            join(__dirname, folderName), 
            join(__dirname, copyFolderName), 
            {
                recursive: true, 
                force: false,
                errorOnExist: true
            }
        );
    } catch (err){
        throw Error('FS operation failed');
    }
};

await copy();