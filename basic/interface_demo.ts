
interface random {
    data: number[]
    shuff(): number[]
}

class Gamble implements random {
    data: number[]
    constructor(data: number[]) {
        this.data = data
    }

    shuff(): number[] {
        const second: number = new Date().getSeconds()
        console.log(second)
        const len: number = this.data.length;
        // second/60 = t/len
        const t: number = Math.floor(second / 60 * len)
        console.log(t)
        let new_array: number[] = []
        for (let i = t; i < this.data.length; i++) {
            new_array.push(this.data[i])
        }
        for (let i = 0; i < t; i++) {
            new_array.push(this.data[i])
        }
        return new_array
    }
}

const origin_data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const game: Gamble = new Gamble(origin_data)

const shuff_data = game.shuff()
console.log(shuff_data)

