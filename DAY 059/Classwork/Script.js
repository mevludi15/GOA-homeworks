let num1 = Number(prompt("enter first number: "))
let num2 = Number(prompt("enter second number: "))

console.log(num1 + num2)

let name1 = String(prompt("enter your name: "))

console.log("Hello " + name1)

document.getElementById("form").addEventListener("click", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    console.log(name);
});