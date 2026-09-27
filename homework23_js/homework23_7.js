const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 450 },
    { name: "Monitor", price: 350 },
    { name: "Headset", price: 150 }
];

// a) 
const expensiveProducts = products.filter(function(product) {
    return product.price > 500;
});

console.log(expensiveProducts);

// b) 
const productStrings = products.map(function(product) {
    return product.name + " - $" + product.price;
});

console.log(productStrings);

// c) 
const totalCost = products.reduce(function(total, product) {
    return total + product.price;
}, 0);

console.log(totalCost);