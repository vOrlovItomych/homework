let messange;

messange = 'Hello world';

messange = 1;
const constant1 = '1';

console.log(constant1, messange, test);

var test = 'test';

let $ = 5;
const userAge = 18;
console.log($);


let test_one = 1;

const integer = 24, float = 25.345435, infinity = 1/0;
console.log(infinity);

let notANumber = 'test' / 3;

console.log(notANumber);

console.log(typeof notANumber);

const bigInteger = 1n;

console.log(typeof bigInteger);
const addOneToBigInt = bigInteger + 1n;

console.log(typeof addOneToBigInt, addOneToBigInt);

const userName = 'Nazar';
const helloWord = `Hello, ${userName}`;

console.log(helloWord);

const booleanTrue = true, booleanFalse = false;

const nullVal  = null; let val1;

notANumber = undefined;

console.log(typeof nullVal, typeof val1, notANumber);

const obj = {
    number: 1,
    boolen: true,
    test: {
        str: 'test'
    }
};
console.log(obj.number, obj['test']);
let testNotANumber = 1 + val1;
console.log(testNotANumber);
console.log(Boolean(nullVal), Boolean(notANumber), Boolean(testNotANumber), Boolean(''), Boolean(infinity));

let number1 = ' 123';
console.log(1 + Number(number1));

console.log( 2 * 'testst' );

const str2 = '2';
const nubmer2 = 2;

console.log(str2 == nubmer2, str2 === nubmer2, str2 !== nubmer2, str2 != nubmer2);

const abc = 'abc', abcd= 'abcd', abd = 'abd';

console.log(abcd > abc, abd > abc);


if(nullVal) {
    console.log('test');
} else if(str2 == nubmer2) {
    console.log(1);
} else {
    console.log(2);
}

const number12 = str2 === nubmer2 ? 1 : 2;
console.log(number12);

let a1 = 3;

switch (a1) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
    console.log( 'Too big' );
    break;
  default:
    console.log( "I don't know such values" );
}

const number123 = nullVal ?? 5;
console.log(number123);

const first = 'test1';
const second = 'test2';

console.log(first && second);

let value = 0;

while (true) { 

    value++;
  
    if (value === 5) break; 

    console.log(value);
  
  }

  do {
    console.log('First do');
  } while(value !== 5);

  for(let i  =0; i< 5; i++) {
    console.log(i);
  }


  let k = 0;

for (; k < 3;) {
  console.log( k++ );
}

