"use strict";
exports.__esModule = true;
exports.Director = void 0;
/**
 * The Director is only responsible for executing the building steps in a
 * particular sequence. It is helpful when producing products according to a
 * specific order or configuration. Strictly speaking, the Director class is
 * optional, since the client can control builders directly.
 */
var Director = /** @class */ (function () {
    function Director() {
    }
    /**
     * The Director works with any builder instance that the client code passes
     * to it. This way, the client code may alter the final type of the newly
     * assembled product.
     */
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    /**
     * The Director can construct several product variations using the same
     * building steps.
     */
    Director.prototype.buildMinimalViableProduct = function () {
        this.builder.producePartA();
    };
    Director.prototype.buildFullFeaturedProduct = function () {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    };
    return Director;
}());
exports.Director = Director;
