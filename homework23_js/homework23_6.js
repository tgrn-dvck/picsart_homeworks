const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.reduce(function(product, number) {
    return product * number;
}, 1);

console.log(result);