const obj1 = {
    name: "mevludi",
    surname: "tavadze"
}

const obj2 = {
    age: 16,
    height: 180
}

let newObj = { ...obj1, ...obj2}

console.log(newObj)


// შექმენით ფუნქცია, რომელსაც გადაეცემა n რაოდენობის რიცხვი, ამ ფუნქციამ უნდა დააბრუნოს გადაცემული რიცხვების ჯამი. 
// გამოიძახეთ ის რამოდენიმეჯერ და ყოველ ჯერზე არგუმენტად გადაეცით სხვადასხვა რაოდენობის რიცხვი.


function sumNums(...numbers) {
    let sum = 0;
    for (const i of numbers) {
        sum += i;
    }
    return sum;
}

console.log(sumNums(10,20,30,40))
console.log(sumNums(5,10,15,20))
console.log(sumNums(2,4,6,8))