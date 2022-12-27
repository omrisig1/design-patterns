"use strict";
exports.__esModule = true;
exports.Product1 = void 0;
/**
 * It makes sense to use the Builder pattern only when your products are quite
 * complex and require extensive configuration.
 *
 * Unlike in other creational patterns, different concrete builders can produce
 * unrelated products. In other words, results of various builders may not
 * always follow the same interface.
 */
var Product1 = /** @class */ (function () {
    function Product1() {
        this.parts = [];
    }
    Product1.prototype.listParts = function () {
        console.log("Product parts: ".concat(this.parts.join(', '), "\n"));
    };
    return Product1;
}());
exports.Product1 = Product1;
