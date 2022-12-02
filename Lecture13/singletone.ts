class Singleton {
    static instance: Singleton;

    private constructor() {
        console.log("constructor called!");
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}