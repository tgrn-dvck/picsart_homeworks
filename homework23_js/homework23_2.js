function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(maxOfThree(10, 25, 7));
console.log(maxOfThree(50, 20, 30));
console.log(maxOfThree(5, 5, 3));