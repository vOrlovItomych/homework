class OrderService {
    database: MySQLDatabase;

    // constructor

    save(order: Order): void {
        if (order.id === undefined) {
            this.database.insert(order);
        } else {
            this.database.update(order);
        }
    }
}

class MySQLDatabase {
    insert(order: Order) {
        // insert
    }

    update(order: Order) {
        // update
    }
}

/*
class OrderService {
    database: Database;

    // constructor

    save(order: Order): void {
        this.database.save(order);
    }
}

interface Database {
    save(order: Order): void;
}

class MySQLDatabase implements Database {
    save(order: Order) {
        if (order.id === undefined) {
            // insert
        } else {
            // update
        }
    }
}
*/
