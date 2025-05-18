const parent = document.getElementById("parent")
const child = document.getElementById("child")

parent.addEventListener("click", function() {
    console.log("parent")
}, true)

child.addEventListener("click", function() {
    console.log("child")
}, true)

parent.addEventListener("click", function() {
    console.log("parent")
})

child.addEventListener("click", function() {
    console.log("child")
})

// capturing არის იგივე მოვლენა რომელიც ვრცელდება ელემენტებზე bubbling'ის მსგავსად ოღონდ ვრცელდება პირიქით თუ დავაჭერთ შვილობილ 
// ელემენტს მაშინ პირველი გამოიტანს მშობელ ელემნტს და შემდეგ შვილობილ ელემენტს

//  bubbling არის მოვლენა რომელიც ვრცელდება ელემენტებზე მაგ: თუ დავაჭერთ შვილობილ ელემენტს მოვლენა გავრცელდება მშობელ ელემენტზეც