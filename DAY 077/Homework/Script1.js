const next = document.getElementById("next")
const back = document.getElementByI("back")
const img = document.getElementById("image")

let i = 0

const images = [
    "./img1.jpg",
    "./img2.jpg",
    "./img3.jpg",
    "./img4.jpg",
    "./img5.jpg"
]

next.addEventListener("click", function(){
    i++
    if (i > 3){
        i = 0 
    }
    img.src = images[i]
});

previous.addEventListener("click", function(){
    i--
    if (i < 0){
        i = 3;
    }
    img.src = images[i]
});

