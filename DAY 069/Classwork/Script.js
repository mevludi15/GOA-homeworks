let date = new Date();
console.log(date);


console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

let myp = document.getElementById("myp");

setInterval(() => {
    const timer = new Date()

    myp.textContent = `${timer.getHours()}:${timer.getMinutes()}:${timer.getSeconds()}`;
}, 1000)