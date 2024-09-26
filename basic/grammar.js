// 类型注解
var str = "hello";
str = "go";
console.log(str);
// 数组的错误定义
var num_arr = [1, 2, 3, 5];
console.log(num_arr);
var num_arr2 = [8, 8, 8, 8, 8, 9];
console.log(num_arr2);
// 元组
var tuple = [1, 2, "3"];
console.log(tuple);
var tuple2 = ["hello", "world"];
console.log(tuple2);
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["A"] = 0] = "A";
    MyEnum[MyEnum["B"] = 1] = "B";
    MyEnum[MyEnum["C"] = 2] = "C";
})(MyEnum || (MyEnum = {}));
console.log(MyEnum.A);
function sum(a, b) {
    return a + b;
}
var result = sum(1, 2);
console.log(result);
function printFunc(s1, s2) {
    console.log(s1 + " " + "come to this " + " " + s2);
}
printFunc("hello", "world");
var class_one = {
    id: 1,
    student_number: 20,
    slogan: "Give my five",
};
console.log(class_one);
var username = "rocky";
var age1 = 10;
console.log(username);
function concat(a, b) {
    return [a, b];
}
console.log(concat(1, 2));
console.log(concat("hello", "world"));
var team = {
    id: 1,
    student_number: 20,
    slogan: "Give my five",
    teacher: "rocky",
    teacher_number: 1,
};
console.log(team);
