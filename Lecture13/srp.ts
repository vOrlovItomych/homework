class User {
    private name: string;
    private age: string;
    constructor(name: string, age: string) {
        this.name = name;
        this.age = age;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }
}

const logs = [];

const user = new User();

user.setAge(12);
logs.push("Age changed on" + 12);