/*Instructions

Task : Imagine you are developing a simulation game that involves various kinds of vehicles. Using the concepts of inheritance, prototype chains, and object-oriented design patterns learned in class.
Instructions:

Create a basic Vehicle constructor function that initializes properties like brand, model, speed, and fuelType.

Using the prototype, add common methods to the Vehicle object like accelerate(), brake(), and refuel().

   accelerate() should increase the speed of the vehicle.
   brake() should decrease the speed.
   refuel() should log a message indicating the vehicle is refueling.

Now, create a Car constructor function. The Car function should inherit properties and methods from the Vehicle object. Additionally, Car should have an extra property numberOfWheels and a method honk() that logs a honking sound.

Similarly, create an Airplane constructor function that inherits from Vehicle. It should have properties numberOfEngines and hasLandingGear and a method takeOff() that logs a message indicating the airplane is taking off.

Show how you would create a new instance of Car and Airplane, and demonstrate invoking their methods, ensuring that both types of vehicles can still accelerate, brake, and refuel through their prototype chain.*/


function Vechile(brand,model,speed,fuel){
    this.brand=brand
    this.model=model
    this.speed=speed 
    this.fuelType=fuel
}

Vechile.prototype.accelerator=function(speed){
    this.speed+=speed

    console.log(`${this.brand} ${this.model} is accelerating.Current Speed: ${this.speed}`)
}

Vechile.prototype.brake=function(speed){
    this.speed-=speed

    console.log(`${this.brand} ${this.model} is taking brake.Current Speed: ${this.speed}`)

}

Vechile.prototype.refuel=function(){
    console.log("Car is refilling tank")
}

function Car(brand,model,speed,fuelType,numberOfWheels){
    Vechile.call(this,brand,model,speed,fuelType,numberOfWheels)
    this.numberOfWheels=numberOfWheels || 4

    this.Honk=function honk(){
        console.log("Horn Honk horn")
    }
}




function aeroPlane(brand,model,speed,fuelType,numberOfEngines,LandingGear){
    Vechile.call(this,brand,model,speed,fuelType,numberOfEngines,LandingGear)

    this.numberOfEngines=numberOfEngines || 8
    this.LandingGear=LandingGear

    this.takeOf=function takeoff(){
        console.log("Aeroplane is ready to takeoff")
    }
}

Car.prototype=Object.create(Vechile.prototype)
aeroPlane.prototype=Object.create(Vechile.prototype)

let myCar=new Car("Maruti","Dzire",80,"Desel",4)
console.log(myCar)

myCar.accelerator(20)
myCar.brake(50)
myCar.refuel()
myCar.Honk()

let myPlane=new aeroPlane("Indigo","domestic",120,"Gas",3,"downside")
console.log(myPlane)

myPlane.accelerator(10)
myPlane.brake(30)

myPlane.takeOf()

