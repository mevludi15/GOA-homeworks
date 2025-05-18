// const child = document.getElementById('child');

// let x = 0;
// let y = 0;


// const moveDown = setInterval(() => {
//    y += 1; 
//    child.style.top = `${y}px`;
//    if (y == 450){
//       clearInterval(moveDown);
//       const moveRight = setInterval(() => {
//          x += 1; 
//          child.style.left = `${x}px`;
//          if (x == 450){
//             clearInterval(moveRight);
//             const moveUp = setInterval(() => {
//                y -= 1; 
//                child.style.top = `${y}px`;
//                if (y == 0){
//                   clearInterval(moveUp);
//                   const moveLeft = setInterval(() => {
//                      x -= 1; 
//                      child.style.left = `${x}px`;
//                      if (x == 0){
//                         clearInterval(moveLeft);
//                      }
//                   }, 5)
//                }
//             }, 5)
//          }
//       }, 5)
//    }
// }, 5)

const child = document.getElementById("child");

let left = 0;
let y = 0;
let direction = "right";

const move = setInterval(function(){
    if(direction == "bottom"){
        y++;
        if(y == 450){
            direction = "left";
        }
    } else if(direction == "right"){
        left++;
        if(left == 450){
            direction = "bottom";
        }
    } else if(direction == "top"){
        left--;
        if(left == 0){
            direction = "right";
        }
    } else{
        y--;
        if(y == 0 && left == 0){
            direction = "bottom";
        }
    }

    child.style.left = left + 'px';
    child.style.top = y + 'px';
}, 5);