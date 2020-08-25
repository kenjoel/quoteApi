"use strict";
exports.__esModule = true;
exports.Car = void 0;
var engine_1 = require("./engine");
var wheel_1 = require("./wheel");
var Car = /** @class */ (function () {
    function Car() {
        this.engine = new engine_1.Engine();
        this.wheels = new wheel_1.Wheels();
    }
    Car.prototype.startEngine = function () {
        this.engine.start();
    };
    return Car;
}());
exports.Car = Car;
