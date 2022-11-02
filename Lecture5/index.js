const user = new Object();

const user1 = {};

console.log(typeof user);
const user2 = {
    name: "Nazar",
    age: 25,
    'test 1': ''
};
console.log(user2.age);
user2.location = 'Ukrain';
user2['geo location'] = {lat: 4324, log: 3442};

console.log(user2['geo location']);
delete user2['geo location'];
console.log(user2['geo location']);
console.log(user2.test);

console.log('age' in user2);

console.log('test' in user2);

for(const key in user2) {
    console.log(key, user2[key]);
}

user2.helloWord = function() {
    return 'Hello';
}

const test = {
    age: 12,
    sayHi: function() {
        console.log('Hi');
    }
}

console.log(user2.helloWord());
test.sayHi();

const user5 = {
    name: 'John',
    sayHi: () => {
        console.log('Hello', this.name);
    }
};

user5.sayHi();

function User(name) {
   this.name = name;

   this.getName = function() {
    console.log(this);
    return this.name;
   }
}

const user7 = new User('John');
console.log(user7.getName());

let user12 = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(() => user12.sayHi(), 1000);

  function mul(a, b) {
    console.log(this, this.name);
    return a * b;
  }
  
  const mult2And3 = mul.call({
    name: "test"
  }, 2, 3);
  console.log(mult2And3);

  let double = mul.bind(null, 2);

  console.log(double(10));




