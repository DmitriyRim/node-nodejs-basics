import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const pathToFile = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const read = createReadStream(pathToFile);
    const hash = createHash('sha256');

    read.on('readable', () => {
        const data = read.read();
        data ? hash.update(data) : console.log('Hash:', hash.digest('hex'));
    })
};

await calculateHash();