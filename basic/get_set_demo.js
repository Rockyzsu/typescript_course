var User = /** @class */ (function () {
    function User(password) {
        this._password = password;
    }
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return "********";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "passowrd", {
        set: function (newPass) {
            this._password = newPass;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var u = new User("123");
console.log(u.password);
