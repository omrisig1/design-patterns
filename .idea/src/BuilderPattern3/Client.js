"use strict";
exports.__esModule = true;
var ConcreteBuilder1_1 = require("./Builders/ConcreteBuilder1");
var ConcreteBuilder2_1 = require("./Builders/ConcreteBuilder2");
var Director_1 = require("./Director");
function clientCode1(director) {
    var builder = new ConcreteBuilder1_1.ConcreteBuilder1();
    director.setBuilder(builder);
    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
    // Remember, the Builder pattern can be used without a Director class.
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}
function clientCode2(director) {
    var builder = new ConcreteBuilder2_1.ConcreteBuilder2();
    director.setBuilder(builder);
    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
    // Remember, the Builder pattern can be used without a Director class.
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}
var director = new Director_1.Director();
clientCode1(director);
clientCode2(director);
