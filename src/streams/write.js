import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const writeStream = createWriteStream(join(__dirname, 'files', 'fileToWrite.txt'));

    console.log('Please enter the text you would like to write to the file. \nTo exit, please enter "exit".')
    stdin.on('data', (data) => {
        if (data.toString().trim() === 'exit'){
            writeStream.end();
            stdin.pause();
            return;
        }

        writeStream.write(data);
    });
};

await write();