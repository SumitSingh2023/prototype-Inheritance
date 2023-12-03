/*Problem Statement :-

You have been appointed as senior developer in Tata’s R&D department. The engineers there are lazy, they don’t want to do everything from scratch whenever they create a new model. They expect you to help them create an inheritance model for the automobiles.

Description :-

Implement an inheritance model for four wheeler automobiles.
Implement using both object.create() and constructor functions().
Think of properties of what can be inherited.*/

let automobile={
    type:"Four-Wheeler",
    fuel:"Petrol" || "Desel",
    stering:"Power"
}

let Mycar=Object.create(automobile)
Mycar.color="red"
console.log(Mycar.fuel)
console.log(Mycar.color)

let car = Object.create(automobile, {
    brand: { value: 'Toyota' },
    model: { value: 'Camry' },
    year: { value: 2022 },
  });
  car.color="black"
  console.log(car.model)
  console.log(car.color)