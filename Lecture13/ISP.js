class Product {
    setName({ name, onFinish = {} }) {
        this.name = name;

        onFinish(this);
    }
}

const run = () => {
    const ProductInstance = new Product();

    ProductInstance.setName({
        name: "Pen",
        onFinish() {
            console.log("Added succefully");
        },
    });

    ProductInstance.setName({
        name: "Pencil",
        onFinish() {},
    });

    // this is generate a error:
    ProductInstance.setName({
        name: "Other pencil",
    });

    //returns TypeError: onFinish is not a function
};

run();