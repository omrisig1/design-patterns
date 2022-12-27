"use strict";
exports.__esModule = true;
exports.Product2 = void 0;
/**
 * It makes sense to use the Builder pattern only when your products are quite
 * complex and require extensive configuration.
 *
 * Unlike in other creational patterns, different concrete builders can produce
 * unrelated products. In other words, results of various builders may not
 * always follow the same interface.
 */
var Product2 = /** @class */ (function () {
    function Product2() {
        this.pages = [];
    }
    Product2.prototype.listParts = function () {
        console.log("Product pages: ".concat(this.pages.join(', '), "\n"));
    };
    return Product2;
}());
exports.Product2 = Product2;
