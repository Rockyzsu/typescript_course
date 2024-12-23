class Product {
    private name: string;
    price: number;
    weight?: number; // 可选

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    setPrice(price: number) {
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    getName() {
        return this.name;
    }
}

let product = new Product("Mobile", 10000);
console.log(product.getPrice());

product.setPrice(20000);
console.log(product.getPrice());

// console.log(product.name); // error

class Mobile extends Product {
    constructor(name: string, price: number) {
        super(name, price);
    }

    // getName(){
    // return this.name;
    // }
}

let mobile = new Mobile("Xiaomi", 10000);

console.log(mobile.getPrice());
console.log(mobile.getName());
// console.log(mobile.name);


// static property
class Maths {
    static pi: number = 3.14
}

console.log(2 * Maths.pi)


class Employee {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    set emp_name(name: string) {
        this.name = name
    }
    get emp_name(): string {
        return this.name
    }
}


const emp: Employee = new Employee("Look", 20)
console.log(emp.emp_name)
emp.emp_name = "Hello"
console.log(emp.emp_name)
