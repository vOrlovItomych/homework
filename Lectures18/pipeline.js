const fs = require('fs');
const stream = require('stream');
const { parentPort } = require('worker_threads');

const readable = fs.createReadStream(
    'test.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('secret.txt');

class Transformer extends stream.Transform {
    _transform (chunk, enc, cb) {
        var upperChunk = chunk.toString().toUpperCase();
        this.push(upperChunk);
        cb();
    }
}
const transformer = new Transformer();

stream.pipeline(
    readable,
    transformer,
    writeStream,
    (err) => {
        if (err) {
            parentPort.postMessage('Pipeline failed');
            return;
        }
        parentPort.postMessage('Pipeline succeeded');
    }
);



