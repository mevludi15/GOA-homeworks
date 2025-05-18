// 1) მომხმარებელს შემოატანინეთ რიცხვი და უთხარით მისი grade (ანუ თუ მაგალითად 90'დან 100'ის ჩათვლით ექნება ქულა გამოუტანეთ "Grade A", თუ 80'დან 89'ის ჩათვლით გამოუტანეთ "Grade B" და ა.შ)
// 2) მომხმარებელს შემოატანინეთ საკუთარი ასაკი, თუ იქნება 13 წელზე ნაკლების გამოუტანეთ You are kid, თუ იქნება 18 წელზე ნაკლების მაგრამ 13'ზე მეტის გამოუტანეთ You are not adult yet და თუ იქნება 18 წელზე მეტის გამოუტანეთ You are adult

let x = prompt("enter grade");

if (x > 90){
    console.log("Grade A");
} else if (80 < x <= 90){
    console.log("Grade B");
} else {
    console.log("Grade C");
}

const age = prompt("enter your age");

if (age < 13){
    console.log("You are kid");
} else if (13 < age < 18){
    console.log("You ar not adult yet");
} else{
    console.log("You are adult");
}

for (let i = 5; i < 11; i++) {
    console.log(i)
}

let x = 0

while (x <= 100) {
    console.log(x);
    x++;
}
