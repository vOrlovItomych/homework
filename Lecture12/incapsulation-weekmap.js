function getCounter() {
    const weakMap = new WeakMap();

    return class Counter {
        constructor() {
            weakMap.set(this, {
                count:0
            });
        }
        click() {
            const prt = weakMap.get(this);
            return prt.count += 1;
        }
        getCount() {
            const prt = weakMap.get(this);
            return prt.count.toLocaleString();
        }
    };
}
const counterClass = getCounter();

const counter = new counterClass();
counter.click();
counter.click();
counter.click();
counter.count;
const counter2 = new counterClass();
counter2.click();
console.log(
    counter.getCount(),
    counter.count
);