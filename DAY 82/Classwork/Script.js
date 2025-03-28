// შექმენით ობიექტი, სადაც შეინახავთ თქვენს პირად მონაცემებს(სახელი, გვარი, ასაკი). 
// შეინახეთ ის ლოკალურ ბაზაში, შემდეგ წამოიღეთ და დაბეჭდეთ მისი რომელიმე კუთვნილება, 
// შემდეგ შეუცვალეთ ამ ობიექტს სახელის კუთვნილება და განაახლეთ ლოკალური ბაზა.

let info = {
    name: "mevludi",
    surname: "tavadze",
    age: 16
}

localStorage.setItem("info", JSON.stringify(info))

console.log(JSON.parse(localStorage.getItem("info")).age);

info.age = "18"

console.log(JSON.parse(localStorage.getItem("age")))