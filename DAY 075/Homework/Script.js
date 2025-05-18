let x = 0 
let y = 0
const child = document.getElementById("child")


document.addEventListener("keydown", event => {
    const moveDown = setInterval(() => {
        y += 1;
        child.style.top = `${y}px`
        if (y == 450){
            clearInterval(moveDown)
        }
    }, 5)
});

document.addEventListener("keyup", event => {
    const moveUp = setInterval(() => {
        y -=1 
        child.style.top = `${y}px`
        if (y == 0){
            clearInterval(moveUp)
        }
    }, 5)
})

document.addEventListener("keyleft", event => {
    const moveLeft = setInterval(() => {
        x -= 1
        child.style.left = `${x}px`
        if (x == 0){
            clearInterval(moveLeft)
        }
    },5)
})

document.addEventListener("keyright", event => {
    const moveRight = setInterval(() => {
        x += 1
        child.style.top = `${x}px`
        if (x == 450){
            clearInterval(moveRight)
        }
    })
})