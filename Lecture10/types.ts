let booleanValue: boolean = false;

booleanValue = true;

booleanValue = 100 > 8;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//let big: bigint = 100n;
decimal += 0xf00d;

let color: string = "blue";
color = 'red';

color += 6;
color += false;

console.log(color);

let number: Array<Number> = [5, 6];

number.push();

interface User {
    name: string,
    age?: number
}
const arrUser: Array<User> = [{
    name: 'test'
}];

const test: string | number = 5;

function testFewResult(): string | number {
    return 5;
}

let x: [string, number];
x = ["hello", 10]; 

enum Color {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE',
  }

  console.log(Color.Green);

  let notSure: unknown = 'stat';

  'star'.substring(1);

let test1: any = 'stat';

console.log(test1.substring(1));

function warnUser(): void {
    console.log("This is my warning message");
  }

  let u: undefined = undefined;
let n: null = null;

function error(message: string): never {
    throw new Error(message);
  }

function createOne(o: object): void {

};
 
// OK
createOne({});

type otherType = "yes" | "no";

const type: otherType = 'yes';

function enumTest(valueEnum: Color) {
    console.log(valueEnum);
}

enumTest(Color.Blue);

type test1 = number | 'test' | object;
