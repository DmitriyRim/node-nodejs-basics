import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import os from 'node:os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const cores = os.availableParallelism();
    const results = [...Array(cores).keys()].map(item => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(join(__dirname, 'worker.js'), { workerData: item + 10 });
            worker.on('message', (data) => {
                resolve( {
                    status: 'resolved',
                    data
                } )
            });
            worker.on('error', () => {
                reject({
                    status: 'error',
                    data: null
                })
            });
        })
    })
    
    console.log(await Promise.all(results))
};

await performCalculations();