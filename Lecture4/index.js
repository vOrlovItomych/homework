const ENV = 'TEST';

console.log(process.env.TEST);
global.env = 'prod';

console.log(global.env);

{
    let hello = 'Hello, class';
    console.log(hello);
}
console.log(test);

{
    let hello = 'Good evening';
    console.log(hello);
}

{
    var test = 'test';
}

{
    console.log(test);
    test= 'test1';
}

{
    var test = 'another one'
    console.log(test);
}

function message() {
    console.log(`Env ${ENV}`);  
}
console.log(message);
message();

function getUserInfo(userName, age = 18, location = undefined) {
    console.log(userName, age, location);
}
getUserInfo('Nazar');

function multply(a, b) {
    return a * b;
}

console.log(multply(5, 7));

console.log('Admin Info ------',getInfoForAdmin());

function getInfoForAdmin(isAdmin) {
    if(!isAdmin) {
        return;
    }

    return {
        name: 'Nazar'
    }
}
console.log(getInfoForAdmin(true), getInfoForAdmin(false));

function confirm() {
    console.log('Confirm');
}

function reject() {
    console.log('reject');
}

function isCormirmed(age, confirm, reject) {
    if(age < 18) {
        reject();
    } else {
        confirm();
    }
}

isCormirmed(12, confirm, reject);

isCormirmed(18, confirm, reject);

let getAge = function() {
    return 4;
};

const testMult = multply;
console.log(testMult(1, 2));

function counter () {
    let counter = 0;

    return function() {
        return ++counter;
    }
}

let count = counter();

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(counter()());


function sum(a) {
    return  function(b) {
        return a + b;
    }
}

console.log(sum(1)(2));

let sum1 = (a, b) => a + b;
console.log(sum1(10, 5));

function sumAfter2sec(a) {
    return function(b) {
        console.log(a, b)
        return setTimeout(function() {
            console.log(a, b);
            return a + b;
        }, 2000);
    }
}

sumAfter2sec(4)(5);

function defer(f, ms) {
    return function() {
        console.log(f, ms);
      setTimeout(function() {
        console.log(f, ms);
        return f.apply(this, arguments)
      }, ms);
    };
  }

  function deferRight(f, ms) {
    return function() {
        console.log(f, ms);
      setTimeout(() => {
        console.log(f, ms);
        return f.apply(this, arguments)
      }, ms);
    };
  }

  function sayHi(who) {
    console.log('Hello, ' + who);
  }
  
  let sayHiDeferred = defer(sayHi, 2000);

  let sayRightDefferred = deferRight(sayHi, 2000);
  sayHiDeferred("John");
  sayRightDefferred("John");

