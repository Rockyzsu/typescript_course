namespace Customer.SalesInfo {
    const name: string = "Austin"
    export function print() {
        console.log('Hello')
    }

    export function display() {
        console.log(name)
    }

}

// const myname = Customer.SalesInfo.name // it will error
// console.log(myname)

const func = Customer.SalesInfo.print
func()

const disp = Customer.SalesInfo.display
disp()