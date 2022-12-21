const fs = require('fs');
const stream = require('stream');

class Transformer extends stream.Transform {
    _transform (chunk, enc, cb) {
        var upperChunk = chunk.toString().toUpperCase();
        this.push(upperChunk);
        cb();
    }
}
const t = new Transformer();

const readable = fs.createReadStream(
    'test.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('secret.txt');

readable.pipe(t).pipe(writeStream);





