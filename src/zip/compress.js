import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const pathToFile = join(__dirname, 'files', 'fileToCompress.txt');
    const pathToZipFile = join(__dirname, 'files', 'archive.gz');
    const gzip = createGzip();

    try {
        await pipeline(
            createReadStream(pathToFile),
            gzip,
            createWriteStream(pathToZipFile)
        )
    } catch {
        throw new Error('FS operation failed');
    }
};

await compress();
/*
compress.js — реализуйте функцию, которая сжимает файл fileToCompress.txt до archive.gz с помощью zlib и API потоков
*/