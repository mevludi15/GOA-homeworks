function ForEach1(fullArr) {
    for (let i = 0; i < fullArr.length; i++) {
        return fullArr[i], i, fullArr
    }
}

const names = ["Liam", "Emma", "Noah", "Olivia", "Ava", "William", "Sophia", "James", "Isabella", "Benjamin"];

const func = (curValue, index, curArray) => {
    console.log(`Name ${curValue} is on ${index} index`);
}

const forEach = (array, func) => {
    for(let i = 0; i < array.length; i++) {
        func(array[i], i, array);
    }
}

forEach(names, func);


function manualMap(Array1, func) {
    const res = [];
    for (let i = 0; i < Array1.length; i++) {
        res.push(func(Array1[i], i, Array1));
    }
    return res;
}


const numbers = [57, 23, 89, 11, 78, 36, 64, 5, 92, 44];
console.log(numbers);

const func1 = (curValue, index, curArray) => {
    if(index % 2 === 0) {
        return Math.floor(curValue / 2);
    }
    
    return curValue * 2;
}

const map = (array, func) => {
    const result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(func(array[i], i));
    }
    
    return result;
}

const newNumbers = map(numbers, func);

console.log(newNumbers);