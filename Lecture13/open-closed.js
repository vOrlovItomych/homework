const SIZES = [
    "small", "medium", "big"
];

class Sandwich {
    constructor({ name, size, price } = {}) {
        this.setName(name);
        this.setSize(size);
        this.setPrice(price);
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }

    setSize(size) {
        const sizesList = SIZES;
        if (sizesList.includes(size)) {
            this.size = size;
        }
    }
}
class BigMac extends Sandwich{
    constructor({ name, size, price } = {}) {
        this.setName(name);
        this.setSize(size);
        this.setPrice(price);
    }
}