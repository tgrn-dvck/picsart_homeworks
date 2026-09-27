const numbers = [5, 3, 8, 1, 9, 2, 7, 4, 6];

let smallest = numbers[0];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }

    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Smallest:", smallest);
console.log("Largest:", largest);