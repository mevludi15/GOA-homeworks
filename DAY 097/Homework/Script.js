const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 45 },
    { name: 'Monitor', price: 300 },
    { name: 'USB Cable', price: 10 }
];


const res = products.filter(product => product.price < 100);

console.log(res)

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];


const names = users.map(user => user.name);

console.log(names)