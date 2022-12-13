const e1 = {
    a: 11,
    b: 12
}
const e2 = {
    a: 11,
}
e2.b = 12;

function Example(x, y) {
    this.x = x;
    this.y = y;
}

const e1 = new Example(11, 12);
const e2 = new Example(55, 44);