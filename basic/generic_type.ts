// 泛型
function getName<T>(name: T): T {

    return name
}

let your_name: string = 'hello';
let my_name = getName(your_name)
console.log(my_name)
