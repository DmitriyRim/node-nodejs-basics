import { Transform } from 'node:stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, _, callback){
            const data = chunk.toString().trim();
            this.push(data.split('').reverse().join('') + '\n');
            
            callback();
        }
    })

    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();