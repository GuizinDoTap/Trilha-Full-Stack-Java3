class Car {
    constructor(name){
        this.name = name;
    }
    static hello() {
        return "Hello";
    }
}

let myCar = new Car("Ford");
document.getElementById("demo").innerHTML = Car.hello();