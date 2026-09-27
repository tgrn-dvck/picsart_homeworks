const numbers = [3, 6, 2, 8, 1, 7, 4, 9, 5];

const result = numbers
    .filter(function(number) {
        return number > 5;
    })
    .map(function(number) {
        return number * 10;
    });

console.log(result);