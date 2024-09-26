// 类型注解
let str: string = "hello";
str = "go";
console.log(str);

// 数组的错误定义
let num_arr: number[] = [1, 2, 3, 5];
console.log(num_arr);

let num_arr2: Array<number> = [8, 8, 8, 8, 8, 9];
console.log(num_arr2);

// 元组
let tuple: [number, number, string] = [1, 2, "3"];
console.log(tuple);

let tuple2: [string, string, number?] = ["hello", "world"];
console.log(tuple2);

enum MyEnum {
  A,
  B,
  C,
}

console.log(MyEnum.A);

function sum(a: number, b: number): number {
  return a + b;
}

let result: number = sum(1, 2);
console.log(result);

function printFunc(s1: string, s2: string): void {
  console.log(s1 + " " + "come to this " + " " + s2);
}

printFunc("hello", "world");

interface Class {
  id: number;
  student_number: number;
  slogan: string;
}

let class_one: Class = {
  id: 1,
  student_number: 20,
  slogan: "Give my five",
};

console.log(class_one);

type MyType = string | number;

let username: MyType = "rocky";
let age1: MyType = 10;

console.log(username);

function concat<T>(a: T, b: T): T[] {
  return [a, b];
}

console.log(concat(1, 2));
console.log(concat("hello", "world"));

interface Team extends Class {
  teacher: string;
  teacher_number: number;
}

let team: Team = {
  id: 1,
  student_number: 20,
  slogan: "Give my five",
  teacher: "rocky",
  teacher_number: 1,
};

console.log(team);
