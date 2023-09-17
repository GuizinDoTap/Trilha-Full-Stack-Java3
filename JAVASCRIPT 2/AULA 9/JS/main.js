class Car {
    constructor (name, year) {
        this.name = name;
        this.year = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar = new Car("Gol", 2017);
document.getElementById("demo").innerHTML = myCar.name + " " + "-" + " " +myCar.year
document.getElementById("demo2").innerHTML = "My car is " + myCar.age() + " years old.";