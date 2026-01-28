// Bài 1:
let x = 42; // number
let y = "Latte"; // string
// z = [1, false, "ts"]; // chưa khai báo kiểu (bỏ comment code để thấy lỗi)
let k = { active: true }; // object
let m = [9]; // array
let p; // any
let q = []; // any[]

// Bài 2:
interface Account {
    id: number;
    username: string;
    isAdmin: boolean;
}

let account: Account = {
    id: 1,
    username: "alice",
    isAdmin: true, // comment isAdmin -> TS báo lỗi: Property 'isAdmin' is missing...
};

// Bài 3:
type Product = [number, string, number];
let product1: Product = [1, "Laptop", 1500];
// let product2: Product = ["Phone", 2, 800]; // Lỗi: Type 'string' is not assignable to type 'number' (bỏ comment code để thấy lỗi)

// Bài 4:
enum OrderStatus {
    Pending,
    Shipped,
    Delivered,
    Cancelled
}

// let status1: OrderStatus = OrderStatus.Done // Lỗi: Property 'Done' does not exist on type 'typeof OrderStatus' (bỏ comment code để thấy lỗi)
let status2: OrderStatus = OrderStatus.Shipped;

// Bài 5:
function computeTotal(price: number, tax: number): number {
    return price + tax;
} // Có trả về number

const total1 = computeTotal(100, 10);
console.log(`Total 1: ${total1}`);

// function computeTotalNoReturn(price: number, tax: number): number {
//     console.log(`Computing total for price: ${price} and tax: ${tax}`);
// } // Thiếu return, TS báo lỗi: Type 'void' is not assignable to type 'number' (bỏ comment code để thấy lỗi)

// Bài 6:
// function log(value) {
//     console.log(value);
// } // Lỗi :param 'value' implicitly has an 'any' type (bỏ comment code để thấy lỗi)

function log<T>(value: T): void {
    console.log(value);
}

const a = 123;
log(a);

const b = "Hello, TypeScript!";
log(b);

//Bài 7:
function example1() {
    const unUsedValue = 10; // TS báo lỗi: 'unUsedValue' is declared but its value is never read.
    console.log("Example 1");
}

function example2() {
    const usedValue = 10;
    console.log(`Used value is: ${usedValue}`);
}

// example1(); // Bỏ comment để chạy hàm
// example2(); // Bỏ comment để chạy hàm 

// Bài 8:
let amounts = [200, 400, 600];
console.log(`First amount: ${amounts[0]}`);
console.log(`Second amount: ${amounts[1]}`);
console.log(`Third amount: ${amounts[2]}`);

amounts[1] = 450; // Cập nhật giá trị phần tử thứ hai
console.log(`Updated second amount: ${amounts[1]}`);

// amounts[1] = "Five Hundred"; // Lỗi: Type 'string' is not assignable to type 'number' (bỏ comment code để thấy lỗi)

// Bài 9:
interface Person {
    id: number;
    name: string;
    retired: (date: Date) => void;
}

const person1: Person = {
    id: 1,
    name: "Alice",
    retired: (date: Date) => {
        console.log(`Person retired on ${date.toDateString()}`);
    }
}

// const person2: Person = {
//     id: 2,
//     name: "Bob",
//     retired: (date: string) => {
//         console.log(`Person retired on ${date}`);
//     }
// } // Lỗi: Type '(date: string) => void' is not assignable to type '(date: Date) => void'. (bỏ comment code để thấy lỗi)

// const person3:Person {
//     id: 3,
//     name: "Charlie",
//     retired: () => {
//         console.log(`Person retired`);
//     }
// } // Lỗi: Property 'date' is missing in type '() => void' but required in type '(date: Date) => void'. (bỏ comment code để thấy lỗi)

person1.retired(new Date());

// Bài 10:
type Employee = {
    id: number;
    name: string;
    department: string;
    computeSalary: (hours: number) => number;
}

const john1: Employee = {
    id: 1,
    name: "John Doe",
    department: "Engineering",
    computeSalary: (hours: number) => {
        return hours * 50;
    }
}
const salary = john1.computeSalary(160); // Tính lương cho 160 giờ làm việc
console.log(`John's Salary: $${salary}`);

// const john2: Employee = {
//     id: "2", // Lỗi: Type 'string' is not assignable to type 'number'
//     name: "John Doe",
//     department: "Engineering",
//     computeSalary: (hours: number) => {
//         return hours * 50;
//     }
// } // Bỏ comment code để thấy lỗi

// const john2: Employee = {
//     id: 3,
//     name: 12345, // Lỗi: Type 'number' is not assignable to type 'string'
//     department: "Engineering",
//     computeSalary: (hours: number) => {
//         return hours * 50;
//     }
// } // Bỏ comment code để thấy lỗi