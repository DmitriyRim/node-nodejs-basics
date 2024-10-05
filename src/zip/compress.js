import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    pipeline(
        createReadStream(join(__dirname, 'files', 'fileToCompress.txt')),
        createGzip(),
        createWriteStream(join(__dirname, 'files', 'archive.gz')),
    )
};

await compress();