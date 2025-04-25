import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';
import { access, constants } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const oldPath = join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = join(__dirname, 'files', 'properFilename.md');
    const errorMessage = 'FS operation failed';

    access(newPath, constants.F_OK, async (err) => {
        if(err) {
            try {
                await fs.rename(oldPath, newPath); 
            } catch {
                throw new Error(errorMessage);
            }
        } else {
            throw new Error(errorMessage);
        }
    });
};

await rename();

/*
rename.js - реализуйте функцию, которая переименовывает файл wrongFilename.txt
 в properFilename с расширением .md 
 (если файла нет wrongFilename.txt или properFilename.md он уже существует Error с сообщением, которое FS operation failed должно быть выдано)
*/