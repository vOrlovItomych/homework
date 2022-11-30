function getCounter() {
    let count = 0;

    return class Counter {
        click() {
            return count += 1;
        }
        getCount() {
            return count.toLocaleString();
        }
    };
}
const counterClass = getCounter();

const counter = new counterClass();
counter.click();
counter.click();
counter.click();
const counter2 = new counterClass();
counter2.click();
console.log(
    counter2.getCount()
);