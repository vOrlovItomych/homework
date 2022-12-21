const { Worker, isMainThread, parentPort } = require('worker_threads');

const worker = new Worker('./pipeline.js');

worker.on('message', (msg) => { console.log(msg); });

console.log("Main");