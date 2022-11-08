const obj = {};

console.log(obj.__proto__ === Object.prototype);

console.log(obj.toString());

const animal = {
    move: true
}

const dog = {
    eat: true,
    __proto__: animal
}

console.log(dog.move);

const cloneDog = Object.create(Object.getPrototypeOf(dog), Object.getOwnPropertyDescriptors(dog));

console.log(cloneDog.move);

const animal1 = {
    eats: true,
    walk() {
        console.log('Walking');
    }
}

const rabbit = {
    jumps: false,
    walk() {
        console.log('Rabbit walk');
    },
    __proto__: animal1
}

const logEar = {
    earLength: 10,
    __proto__: rabbit
}
logEar.walk();
console.log(logEar.jumps, logEar.eats, logEar);

rabbit.walk();

logEar.__proto__ = {};

console.log(logEar.jumps);

const user = {
    firstName: 'Nazar',
    secondName: 'Zastavnyi',

    get fullName() {
        return `${this.firstName} ${this.secondName}`
    },

    set fullName(value) {
        [this.firstName, this.secondName] = value.split(' ');
    }
}

const admin = {
    firstName: '1',
    secondName: '2',
    isAdmin: true,
    __proto__: user
}

user.fullName = 'Test 1';
admin.fullName = 'Test 2';

console.log(user.fullName, admin.fullName);
const arr = [];

console.log(arr.__proto__.__proto__);

console.log('t 1'.split(' '));
String.prototype.show = function() {
    console.log(this);
}

'SHOW!!!!'.show();

class User {
    constructor(firstName, secondName) {
        this.firstName = firstName,
        this.secondName = secondName
    }

    get fullName() {
        return `${this.firstName}, ${this.secondName}`
    }
}

const user1 = new User('Jhon', 'See');

console.log(typeof User, user1.fullName);

class Animal {
    legs;

    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('Walk', this.name);
    }
}

class Rabbit extends Animal {

    name;
    constructor(name) {
        super(name);
        this.name = name;
    }

    jumps() {
        console.log('Jump', this.name);
    }

    walk() {
        super.walk();
        console.log('Rabbit!!!!');
    }
}
const rabbit1 = new Rabbit('Banny');

rabbit1.walk();

/*rabbit1.jumps();


for(let prop in admin) {
    let isOwn = admin.hasOwnProperty(prop);
  
    if (isOwn) {
      console.log(`Our: ${prop}`); 
    } else {
      console.log(`Inherited: ${prop}`);
    }
  }

*/