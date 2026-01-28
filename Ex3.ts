// Bài 1:
function echo<T>(arg: T): T {
    return arg;
}

const a = echo<string>("Hello, TypeScript!");
console.log(a);

// Bài 2:
function printName<T extends { name: string }>(obj: T): void {
    console.log(obj.name);
}

const person = { name: "Alice" };
printName(person);

// Bài 3:
class Entity<TId, TData = unknown> {
    readonly id: TId;
    private data: TData;

    constructor(id: TId, data: TData) {
        this.id = id;
        this.data = data;
    }

    getId(): TId {
        return this.id;
    }

    getData(): TData {
        return this.data;
    }

    updateData(newData: TData): void {
        this.data = newData;
    }
}

const e1 = new Entity<number, string>(1, "Initial Data");
console.log(e1.getId());
console.log(e1.getData());
e1.updateData("Updated Data");
console.log(e1.getData());

const e2 = new Entity<string>("entity-1", { key: "value" });
console.log(e2.getId());
console.log(e2.getData());

// Bài 4:
interface User {
    userId: number;
    username: string;
}

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const u: User = { userId: 1, username: "Bob" };
const name = getProp(u, "username");
console.log(name);