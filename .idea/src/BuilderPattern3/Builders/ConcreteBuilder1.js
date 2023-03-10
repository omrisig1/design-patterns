"use strict";
exports.__esModule = true;
exports.ConcreteBuilder1 = void 0;
var Product1_1 = require("../Products/Product1");
/**
* The Concrete Builder classes follow the Builder interface and provide
* specific implementations of the building steps. Your program may have several
* variations of Builders, implemented differently.
*/
var ConcreteBuilder1 = /** @class */ (function () {
    /**
     * A fresh builder instance should contain a blank product object, which is
     * used in further assembly.
     */
    function ConcreteBuilder1() {
        this.reset();
    }
    ConcreteBuilder1.prototype.reset = function () {
        this.product = new Product1_1.Product1();
    };
    /**
     * All production steps work with the same product instance.
     */
    ConcreteBuilder1.prototype.producePartA = function () {
        this.product.parts.push('PartA1');
    };
    ConcreteBuilder1.prototype.producePartB = function () {
        this.product.parts.push('PartB1');
    };
    ConcreteBuilder1.prototype.producePartC = function () {
        this.product.parts.push('PartC1');
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
    ConcreteBuilder1.prototype.getProduct = function () {
        var result = this.product;
        this.reset();
        return result;
    };
    return ConcreteBuilder1;
}());
exports.ConcreteBuilder1 = ConcreteBuilder1;
