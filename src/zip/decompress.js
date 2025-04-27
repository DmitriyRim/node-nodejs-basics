import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createGunzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const pathToFile = join(__dirname, 'files', 'fileToCompress.txt');
    const pathToZipFile = join(__dirname, 'files', 'archive.gz');
    const gunzip = createGunzip();

    try {
        await pipeline(
            createReadStream(pathToZipFile),
            gunzip,
            createWriteStream(pathToFile)
        )
    } catch {
        throw new Error('FS operation failed');
    }

};

await decompress();