class User {
    private _password: string;

    constructor(password: string) {
        this._password = password;
    }

    get password(): string {
        return "********";
    }

    set passowrd(newPass: string) {
        this._password = newPass;
    }
}


const u = new User("123")
console.log(u.password)