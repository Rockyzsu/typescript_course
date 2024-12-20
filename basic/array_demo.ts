const arr: number[] = [1, 2, 3, 4]
for (let i: number = 0; i < arr.length; i++) {
    console.log(i)
}

let score = [11, 12, 13, 14, 15]
const [first, second, three, four] = score
console.log(first)
console.log(second)
console.log(four)

let score_obj: any = [1, 2, [4, 5], 6]
const [a, b, [, c], d] = score_obj;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

let [a1, ...remains] = [1, 2, 3, 4, 5, 6]
console.log(a1) //1
console.log(remains) //[ 2, 3, 4, 5, 6 ]

let a2 = remains.slice(1) // 3 4 5 6
console.log(a2)


function math([math, eng]: [number, number]): number {
    console.log(math);
    console.log(eng)
    return math + eng
}

const res = math([20, 30])
console.log(res)