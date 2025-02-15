function Motorcycle(brand, model, cc, color) {
    this.brand = brand; 
    this.model = model; 
    this.engineCapacity = cc;
    this.color = color;
}

const moto1 = new Motorcycle("kawasaki", "KX450", 450, "black")

function Engine(type, horsepower, liter, fuelType, Method) {
    this.type = type; 
    this.horsepower = horsepower; 
    this.liter = liter; 
    this.fuelType = fuelType;
    this.addhorsepower = Method;
}

function addhorsepower() {
    horsepower += 100
}

const engine1 = new Engine("V8", 450, 5.0, "Petrol")