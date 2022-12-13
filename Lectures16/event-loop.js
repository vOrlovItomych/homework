const fs = require('fs');

console.log('Start');

setTimeout(() => console.log('setTimeout 1'), 0);
setImmediate(() => console.log('setImmediate 1'));

fs.readFile(__filename, () => {
    setTimeout(() => console.log('readFile setTimeout 1'), 0);
    setImmediate(() => console.log('readFile setImmediate 1'));
    process.nextTick(() => console.log('readFile Next Tick'));
});

Promise.resolve().then(() => {
    console.log('Promise');
    process.nextTick(() => console.log('Promise Next Tick'));
});

process.nextTick(() => console.log('Next Tick'));

setTimeout(() => console.log('setTimeout 2'), 0);

console.log('End');

/*
Start
End
Next Tick
Promise
Promise Next Tick
setTimeout 1
readFile Next Tick
readFile setTimeout 1
readFile setImmediate 1
setTimeout 2
setImmediate 1*/


