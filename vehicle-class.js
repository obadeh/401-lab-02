'use strict';

class Vehicle {

constructor(name, wheels){

    this.name = name;
    this.wheels = wheels;

}

drive() {
    return 'Moving Forward';
  };

stop()  {
    return 'Stopping';
  };

}

class Car extends Vehicle {
    // cars can also do their own thing.
    constructor(name){

        Vehicle(name, 4);
    
    }
  }


class Motorcycle extends Vehicle {
    // Motorcycle can also do their own thing.

    constructor(name){
        Vehicle(name,2);
    }

    wheelie() {
        return 'Wheee!';
      };
  }



module.exports = Vehicle;