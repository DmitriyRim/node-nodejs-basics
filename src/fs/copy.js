import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cp, constants } from 'node:fs/promises';
import { access } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const pathFrom = join(__dirname, 'files');
    const pathTo = join(__dirname, 'files_copy');
    const errorMessage = 'FS operation failed';
    
    access(pathFrom, constants.F_OK, (err) => {
        if(err){
            throw Error(errorMessage);
        }
    });

    access(pathTo, constants.F_OK, async (err) => {
        if(err) {
            await cp(pathFrom, pathTo, { force: false, errorOnExist: true, recursive: true });
        } else {
            throw Error(errorMessage);
        }
    });

};

await copy();