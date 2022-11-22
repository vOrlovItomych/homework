/*interface Animal {
    name: string;
  }

  class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    bark() {
      console.log("Woof! Woof!", this.name);
    }
  }

  const dog = new Dog('Rex');

  dog.bark();
*/
  class Animal {
    name: string;
    constructor(theName: string) {
      this.name = theName;
    }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
   
  class Snake extends Animal {
    bite: boolean;
    constructor(name: string) {
      super(name);
      this.bite = true;
    }
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }

  const snake: Snake = new Snake('test');

  snake.move();
