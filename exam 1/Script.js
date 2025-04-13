const button = document.getElementById("button")
let name = document.getElementById("name")
let pass = document.getElementById("pass")

let name_pass = []

button.addEventListener("click", function(){
    name_pass.push(name,pass)
    console.log(name_pass)
})
