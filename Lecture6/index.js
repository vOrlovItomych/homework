const arr = new Array();

const arr1 = ['test', 1, {}, [], function() {
    console.log('Hello word');
}];

console.log(arr1[0], arr1[1]);
console.log(arr1.length);
const length = arr1.length;
console.log(arr1[length - 1]);

arr1.push({});
delete arr1[1];

console.log(arr1, arr1[1]);

console.log(arr1.pop());
console.log(arr1.length);
arr1.shift('First element');

arr1.unshift('TEST');

console.log(arr1);

for(const item of arr1) {
    console.log(item);
}

for(let i = 0; i<arr1.length; i++) {
    console.log(i, arr1[i]);
}

arr1[arr1.length - 1]();

for(const item in arr1) {
    console.log(item, arr1[item]);
}


console.log(arr1[1]);
arr1.splice(0, 2, 'test1', 'test2');
console.log(arr1);
const arr2 = arr1.slice(0, 2);
console.log(arr2)


const arr3 = arr1.concat(arr2);
console.log(arr3.length, arr3);
const fruit = ['Banan', 'Apple', 'Banan', 'Banan'];

console.log(fruit.indexOf('Banan'), fruit.lastIndexOf('Banan'));

console.log(fruit.includes('Orange'), fruit.includes('Banan'));

console.log(typeof arr1, Array.isArray(arr1), Array.isArray({}));
arr1.test = 5;

console.log(arr1.test);

const banans = fruit.filter(item => item === 'Banan');

console.log(banans);

console.log(fruit.indexOf('Orange'));

const numbers = [1, 3, 2]

const test = numbers.map(function(item) {
    if(item > 2) {
        return item;
    }
    return 'NAN';
});

console.log(test);

numbers.sort();
console.log(numbers);

function compareRevertNumeric(a, b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
  }
  

const usersArr =[{age: 25}, {age: 12}, {age: 1}];
usersArr.sort(function(a, b) {
    return a.age - b.age;
});
console.log(usersArr);

console.log(usersArr.reverse());

const str = 'Hello, world';
const arrStr = str.split(', ');
console.log(arrStr);

const arrStrings = ['Hello', 'Andriy', 'Nazar'];

console.log(arrStrings.join(' '));

const numbers1 = [45, 435, 564, 7567];

const sum = numbers1.reduce(function(accumulator, item) {

    return accumulator + item
}, 0);
console.log(sum);

const uniqueFruit = fruit.reduce((accumulator, item, index, arr) => {
    if(!accumulator.includes(item)) {
        accumulator.push(item);
    }
    return accumulator;
},[]);
console.log(uniqueFruit);

const obj = {
    from: 1,
    to: 10
};

obj[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,

        next() {
            if(this.current < this.last) {
                return { done: false, value: this.current ++ }
            } else {
                return { done: true };
            }
        }
    }
}

for(const item of obj) {
    console.log(item);
}

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}

const arrChar = Array.from('test');

console.log(arrChar, Array.from(obj));
