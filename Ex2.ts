// Bài 1:
class Logger {
    constructor(public fileName: string) {
    }

    write(message: string): void {
        console.log(`[${this.fileName}] ${message}`);
    }
}

const log = new Logger('app.log');
log.write('Application started.');

// Bài 2:
class Person {
    constructor(public firstName: string, public lastName: string) { }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const name = new Person('Bosco', 'Wong');
console.log(name.fullName); // Output: Bosco Wong

// Bài 3:
class Employees extends Person {
    constructor(firstName: string, lastName: string, public salary: number, public department: string) {
        super(firstName, lastName);
    }
}

const employee = new Employees('Alice', 'Johnson', 75000, 'Engineering');
console.log(employee.fullName);
console.log(employee.salary);
console.log(employee.department);

// Bài 4:
// private: chỉ có thể truy cập trong chính class khai báo member đó. Các lớp con và code bên ngoài không thể truy cập
// protected: có thể truy cập trong class khai báo và trong các lớp kế thừa (subclass). Không thể truy cập từ bên ngoài
class Member {
    private id: number;
    protected role: string;

    constructor(public firstName: string, public lastName: string, id: number, role: string) {
        this.id = id;
        this.role = role;
    }

    show(): void {
        console.log(`ID: ${this.id}, Role: ${this.role}`);
    }
}

class Admin extends Member {
    constructor(firstName: string, lastName: string, id: number, role: string) {
        super(firstName, lastName, id, role);
    }

    getInfo(): void {
        // console.log(`ID: ${this.id}`); // Lỗi: Không thể truy cập vì id là private
        console.log(`Role: ${this.role}`); // Có thể truy cập vì role là protected
        console.log(`Name: ${this.firstName} ${this.lastName}`);
    }
}

const admin = new Admin('Bob', 'Smith', 1, 'Administrator');
admin.show();
admin.getInfo();

// Bài 5:
interface Address {
    street: string;
    city: string;
    zipCode: string;
}

interface Employee {
    name: string;
    salary: number;
    address: Address;
}

const employees: Employee = {
    name: "John Smith",
    salary: 50_000,
    address: {
        street: "Flinders st",
        city: "Melbourne",
        zipCode: "3144",
    },
};

console.log(employees);