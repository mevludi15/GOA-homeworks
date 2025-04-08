const user = {
    name: "mevludi",
    age: 16,
    country: "Georgia",
    height: 180
};
  
const {name, ...restInfo} = user;
  
console.log(name);      
console.log(restInfo)


function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
  
console.log(sumNumbers(1, 2, 3));       
console.log(sumNumbers(5, 112, 25, 320));

const [first, second, ...others] = [10, 20, 30, 40, 50];

console.log(first);  
console.log(second); 
console.log(others);

// 2)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const res = [...arr1, ...arr2];

console.log(res);


// localstorage არის პატარა "საცავი" რომელიც არის ჩვენს კომპიუტერში და მისი ნახვა შეგვიძლია მხოლოდ ჩვენ 
// ჩვენი კომპიუტერიდან localstorage ში შეგვიძლია შევინახოთ მომხმარებლის ინფორმაცია რომლის შემდგომ გამოყენება შეგვიძლია

