const Arr = [1, 2, 3, 4, 5]

const [one, two, three, four, five] = Arr

const obj = {
    name: "mevludi",
    surname: "tavadze",
    age: 16
}

const {name, surname, age} = obj

// rest ოპერტორი გამოიყენება რამდენიმე ელემენტის ერთად შეკვრისთვის მაგ: დესტრუქციის დროს შეგვიძლია გამოვიყენოთ და ბოლო რამდენიმე 
// ელემენტი დავაჯგუფოთ გამოძახების შემთხვევაში კი ერთად გამოვა დაჯგუფებული


// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0)
// }

// console.log(sum(4, 8, 12, 16));


function sum1(numbers1) {
    let res = 0;
    for (let i = 0; i < numbers1.length; i++) {
        res = res + numbers1[i];
    }
    return res;
}

console.log(sum1(4, 8, 12, 16));