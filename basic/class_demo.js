var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var product = new Product("Mobile", 10000);
console.log(product.getPrice());
product.setPrice(20000);
console.log(product.getPrice());
// console.log(product.name); // error
var Mobile = /** @class */ (function (_super) {
    __extends(Mobile, _super);
    function Mobile(name, price) {
        return _super.call(this, name, price) || this;
    }
    return Mobile;
}(Product));
var mobile = new Mobile("Xiaomi", 10000);
console.log(mobile.getPrice());
console.log(mobile.getName());
