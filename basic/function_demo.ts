const square = (n: number): number => n * n;

// console.log(square(10))

function Sing(first: string, second: string): string {
    let songName = `${first}-${second}`
    console.log(songName);
    return songName
}
Sing('hello', 'world')

function SingASong(first: string, second?: string) {
    if (second) {
        let songName = `${first}-${second}`
        console.log(songName);
        return songName
    }
}
SingASong('hello', 'second-world')


function SingAllSong(first: string, second: string, ...remainSong: string[]) {
    const disp = `${first}-${second}-${remainSong}`
    console.log(disp)
}


SingAllSong('hello', 'second', 'haha', 'can see this', ' is pass')

function SingSong1(first: string) {
    return first + ' world'
}
const ret1 = SingSong1('hello')
console.log(ret1)


function runSong(checkName: (name: number) => number): number {
    console.log('inside runSong')
    let result = 0;
    for (let i = 0; i < 5; i++) {
        result += checkName(i)
    }
    return result
}

function checkName(name: number): number {
    return name + name
}

let ret2 = runSong(checkName)
console.log('ret2', ret2) // 20

function checkName2(name:string){
    return `${name} - Done `
}

// runSong(checkName2) 异常

export { square };