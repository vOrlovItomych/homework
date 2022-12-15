const EventEmitter = require('events').EventEmitter;
const eventEmitter = new EventEmitter;
class Food {
    constructor(name) {
        this.name = name;
    }

    becomeEaten() {
        return 'I have been eaten.';
    }
}

var bacon = new Food('bacon');

class gator {
    eat() {
        bacon.becomeEaten();
    }
}