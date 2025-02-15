// python'ის dictionary'ებსა და js'ის object'ებს შორის ძალიან ბევრი მსგავსებაა და მცირედია განსხვავებები მაგალითად 
// მსგავსებაა ის რომ იქმნება ჯერ ობჯექთის სახელი შემდეგ იწერება კეი და ამ კეიში შედის კეის მნიშვნელობა ისევე როგორც ფითონში
// განსხვავება არის ის რომ ობჯექთის შექმნის შემდეგ ქეი ბრჭყალებში არისმება ფითონშ კი ეს აუცილებელია

// ფუნქციას შეგვიძლია გამოვიყენოთ რამდენიმე მნიშვნელობაზე მაგალითად სტრინგებზე ინტეჯერებზე ... ხოლო მეთოდების
// გამოყენება ხდება მხოლოდ ერთ კონკრეტულ მნიშვნელობაზე მაგალითად მხოლოდ სტრინგებზე, მხოლოდ ინტეჯერებზე ...

// 2) შექმენით რაიმე ობიექტი რომელსაც ექნება 3 property და ერთ-ერთი იქნება რაიმე მეთოდი
// 3) ახსენით რა განსხვავებაა ფუნქციასა და მეთოდს შორის (დეტალურად)
// 4) შექმენით person Object Constructor 3 property'ით
// 5) შექმენით მანქანის Object constructor რომელსაც ექნება 5 property, აქედან ერთერთი აუცილებლად უნდა იყოს horsePower და კიდევ ერთი აუცილებლად მეთოდი რომელიც ამ horsePower'ს გაზრდის 100'ით

function  obj1 (name, age, method){
    this.name = name
    this.age = age
    this.addage = method
}

function addage(){
    age += 1
}  




function Person(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

const person1 = new Person("mevludi", 15, "black");

function Car(make, model, year, color, horsePower) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.horsePower = horsePower;
}

this.increaseHorsePower = function() {
    this.horsePower += 100;
}


const car1 = new Car("mercedes","E350","2013","black","325")
