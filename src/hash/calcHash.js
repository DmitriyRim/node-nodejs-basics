import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const hash = createHash('sha256');
    const input = createReadStream(join(__dirname, 'files', 'fileToCalculateHashFor.txt'));

    input.on('readable', () => {
        const data = input.read();
        if(data){
            hash.update(data)
        } else {
            console.log(`${hash.digest('hex')}`)
        }
    })
};

await calculateHash();