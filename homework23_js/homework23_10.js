const numbers = [1, 2, 3, 4, 5];

const result = numbers.map(function(number) {
    return {
        value: number,
        isEven: number % 2 === 0
    };
});

console.log(result);