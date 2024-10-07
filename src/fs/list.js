import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    const pathToFolder = join(__dirname, 'files');

    try {
        const listFiles = await readdir(pathToFolder);
        
        listFiles.map(fileName => {
            console.log(fileName);
        })
    } catch {
        throw Error('FS operation failed');
    }
};

await list();

/*
list.js - реализовать функцию, которая выводит весь массив имен файлов из папки files в консоль 
(если папка files не существует, должна быть выдана ошибка с сообщением FS operation failed).
*/