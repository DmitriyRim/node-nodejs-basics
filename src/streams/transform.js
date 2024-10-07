import { stdout, stdin } from 'node:process';
import { Transform, pipeline } from 'node:stream';

const transform = async () => {
    const myTransform = new Transform({   
        transform(chunk, encoding, callback) {
          const data = [...chunk.toString()].reverse().join('');
      
          callback(null, `${data}\n`);
        },
      });

      pipeline(
        stdin,
        myTransform,
        stdout,
        err => {
            throw Error(err)
        }
      )
};

await transform();