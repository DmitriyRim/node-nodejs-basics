import { Worker } from 'node:worker_threads';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import os from 'node:os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const cpus = os.cpus();
    const results = new Array(cpus.length).fill(0).map((_, index) => {
        return new Promise((resolve, rejects) => {
            const worker = new Worker(join(__dirname, 'worker.js'), { workerData: index + 10 });
            
            worker.on('message', (data) => resolve({status: 'resolved', data}));
            worker.on('error', () => rejects({status: 'error', data: null}))
        })
    })
     
    console.log(await Promise.all(results))
};

await performCalculations();