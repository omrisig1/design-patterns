"use strict";
exports.__esModule = true;
exports.ConcreteBuilder2 = void 0;
var Product2_1 = require("../Products/Product2");
/**
 * The Concrete Builder classes follow the Builder interface and provide
 * specific implementations of the building steps. Your program may have several
 * variations of Builders, implemented differently.
 */
var ConcreteBuilder2 = /** @class */ (function () {
    /**
     * A fresh builder instance should contain a blank product object, which is
     * used in further assembly.
     */
    function ConcreteBuilder2() {
        this.reset();
    }
    ConcreteBuilder2.prototype.reset = function () {
        this.product = new Product2_1.Product2();
    };
    /**
     * All production steps work with the same product instance.
     */
    ConcreteBuilder2.prototype.producePartA = function () {
        this.product.pages.push('PageA2');
    };
    ConcreteBuilder2.prototype.producePartB = function () {
        this.product.pages.push('PageB2');
    };
    ConcreteBuilder2.prototype.producePartC = function () {
        this.product.pages.push('PageC2');
    };
    /**
     * Concrete Builders are supposed to provide their own methods for
     * retrieving results. That's because various types of builders may create
     * entirely different products that don't follow the same interface.
     * Therefore, such methods cannot be declared in the base Builder interface
     * (at least in a statically typed programming language).
     *
     * Usually, after returning the end result to the client, a builder instance
     * is expected to be ready to start producing another product. That's why
     * it's a usual practice to call the reset method at the end of the
     * `getProduct` method body. However, this behavior is not mandatory, and
     * you can make your builders wait for an explicit reset call from the
     * client code before disposing of the previous result.
     */
    ConcreteBuilder2.prototype.getProduct = function () {
        var result = this.product;
        this.reset();
        return result;
    };
    return ConcreteBuilder2;
}());
exports.ConcreteBuilder2 = ConcreteBuilder2;
