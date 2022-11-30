class Abstract {
    constructor() {
        if (new.target === Abstract) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }
}

class Derived extends Abstract {
    constructor() {
        super();
        // more Derived-specific stuff here, maybe
    }
}

const b = new Derived();