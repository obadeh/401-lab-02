'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');


// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class

// const harley2 = new VehicleClass.Vehicle.Motorcycle('Harley');
// console.log(harley2.name, harley2.wheelie(), harley2.stop());

let a =new VehicleClass.Car('Mazda 3')
console.log(a)