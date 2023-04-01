class Vehicle{
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    set updateName(name) {
        this.name = name;
    }
}

class Car extends Vehicle{
    constructor(name, year, seater) {
        super(name, year);
        this.seater = seater;
    }

    printCar() {
        console.log("Name   : ", this.name);
        console.log("Year   : ", this.year);
        console.log("Seater : ", this.seater);
    }
}

class ElectricCar extends Car{ 
    constructor(name, year, seater, battery) {
        super(name, year, seater);
        this.battery = battery;
    }

    showDetails() {
        console.log("Name    : ", this.name);
        console.log("Year    : ", this.year);
        console.log("Seater  : ", this.seater);
        console.log("Battery :", this.battery, "KW");
    }
};

let maruti = new Car("Swift", 2020, 4);
maruti.updateName = "Alto";
console.log(maruti);
maruti.printCar();

let nexon = new ElectricCar("Nexon", 2021, 5, 40);
nexon.printCar();
nexon.showDetails();
nexon.updateName = "Tata-Nexon";
nexon.showDetails();