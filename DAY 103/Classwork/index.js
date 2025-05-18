// 1) ახსენით რა არის promise
// 2) შექმენით promise რომელიც აresolveბს (ფუნქციაში გამოიყენეთ setTimeout რადგან ჰქონდეს ნამდვილი სერვერიდან ინფორმაციის წამოღების სახე) 
// 3) შექმენით promise რომელიც აrejectებს (ფუნქციაში გამოიყენეთ setTimeout რადგან ჰქონდეს ნამდვილი სერვერიდან ინფორმაციის წამოღების სახე) 
// 4) შექმენით promise რომელიც ან აresolveბს ან აrejectებს, გარკვეული პირობის მიხედვით (ფუნქციაში გამოიყენეთ setTimeout რადგან ჰქონდეს ნამდვილი სერვერიდან ინფორმაციის წამოღების სახე)

// promise არის ობიექტი რომელიც საბოლოოდ წარმოადგენს მოვლენის წარმატებულობას ან წარუმატებლობას მაგ: გაიხსნას თუ არა საიტი
// რომელზე შესვლაც გვინდა და ასე შემდეგ, ასევე promise გამოიყენება API ში 


const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Person")
    }, 1000)
})


const prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Goodbye Person")
    }, 1000)
})

let x = 10
const prom3 = new Promise((resolve, reject) => {
    if (x < 10){
        setTimeout(() => {
            resolve("Hello Person")
        }, 1000)
    } else {
        setTimeout(() => {
            reject("Goodbye Person")
        }, 1000)
    }
})

prom1
    .then((result) =>{
        console.log(result)
    })

prom2
    .then((rejection) => {
        console.log(rejection)
    })

prom3
    .then((resultValue) => {
        console.log(resultValue)
        return resultValue
    })
    .catch((rejectValue) => {
        console.log(rejectValue)
    })