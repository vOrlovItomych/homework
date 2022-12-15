const EventEmitter = require('events').EventEmitter;
const eventEmitter = new EventEmitter;

const connectHandler = function connected() {
    console.log('Connection established.');

    eventEmitter.emit('data_received');
}
const connectHandler2 = function connected() {
    console.log('Connection2');
}

eventEmitter.on('connection', connectHandler);
eventEmitter.on('connection', connectHandler2);

console.log(eventEmitter.listeners('connection'));
eventEmitter.removeListener('connection', connectHandler);
console.log(eventEmitter.listeners('connection'));

eventEmitter.on(
    'data_received', function () {
        console.log('Data Transfer Successful.');
    });

eventEmitter.emit('connection');

console.log("Finish");