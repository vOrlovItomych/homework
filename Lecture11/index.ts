interface Label {
    label: string,
    lenght?: number;
}

interface SquareConfig {
    color?: string;
    width?: number;
  }

function returnLabel(testLable: Label): Label {
    console.log(testLable);

    return testLable;
}

function returnSquare(square: SquareConfig) {
    console.log(square);
}

returnSquare({color: 'Red', width: 50});

returnLabel({label: 'tes', lenght: 5})

interface Point {
    readonly x: number;
    readonly y: number;
  }

  const point: Point = {x: 5, y: 10};

  let a: number[] = [1, 2, 3, 4];
  let ro: ReadonlyArray<number> = a;

  ro = [];

  console.log(a, ro);

  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  let functionOne: SearchFunc;
  functionOne = function() {
    return false;
  }

  functionOne('test', 'tes1');


  interface StringArray extends Array<string> {
    [index: number]: string;
  }

  const test: StringArray = ['test', 'tes'];

  
  interface Animal {
    name: string;
  }
   
  interface Dog extends Animal {
    breed: string;
  }

  const dog1: Dog = {
    name: 'Peter',
    breed: 'korgi'
  }

  interface Dictionary {
    [index: string]: {
        type: string,
        number: number
    };
  }

  const dict1: Dictionary = {
    test: {
        type: 'test1',
        number: 1
    },
    test1: {
        type: 'test1',
        number: 1
    },
  }
  

  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }
   
  function getCounter(): Counter {
    let counter = function (start: number) {} as Counter;
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
  }
   
  let c = getCounter();
  c(10);
  c.reset();
  c.interval = 5.0;

  class Greeter {
    greeting: string;
   
    constructor(message: string) {
      this.greeting = message;
    }
   
    greet() {
      return "Hello, " + this.greeting;
    }
  }
   
  let greeter = new Greeter("world");
