// Create a Car class! The Car class should have the following properties: brand, seats, isManual, and miles.
// Add a method called 'Drive' that takes a distance and adds it to the car's miles.
// Add a method called 'Upgrade' that add's two seats.

// Create 3 new cars. Have the 1st car drive twice and then upgrade. Have the 2nd car drive once. Have the 3rd car upgrade and drive 4 times.
// 10:00 Review Toy Problems

class Car {
    constructor (brand, seats, isManual, miles) {
        this.brand = brand;
        this.seats = seats;
        this.isManual = isManual;
        this.miles = miles;
    }

    Drive (distance) {
        this.miles += distance;
    }

    Upgrade () {
        this.seats += 2;
    }
}

let newCar = new Car('Lexus', 5, false, 10000);

console.log(newCar);

newCar.Drive(1000);

console.log(newCar);

newCar.Upgrade();

console.log(newCar);