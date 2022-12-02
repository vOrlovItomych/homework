class Retangle {
    constructor({ width, length }) {
        this.setWidth(width);
        this.setLength(length);
    }

    setWidth(width) {
        this.width = width;
    }

    setLength(length) {
        this.length = length;
    }

    getWidth() {
        return this.width;
    }

    getLength() {
        return this.length;
    }

    getArea() {
        return this.width * this.length;
    }
}

class Square extends Retangle {
    constructor(length) {
        super({ width: length, length });
    }

    getArea() {
        return this.length * this.length;
    }
}

const run = () => {
    const RetangleInstance = new Retangle({ width: 10, length: 5 });

    const SquareInstance = new Square(10);

    SquareInstance.setLength(5);
    SquareInstance.setWidth(7);

    console.log(SquareInstance.getArea()); //expected: 35, receiveid: 25
};

run();