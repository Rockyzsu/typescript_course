const employee = {
    eimpName: 'Honda',
    age: 20,
    salary: 10000,
    sex: 'F'
}

let { eimpName, age, salary: payment, sex } = employee
console.log(eimpName);
console.log(payment)

type Prop = {
    name: string,
    age: number
}
function setProperty({ name, age }: Prop) {
    console.log('my name is ', name)
    console.log('my age is ', age)
}

const prop: Prop = {
    name: 'Jekin',
    age: 20
}
setProperty(prop)