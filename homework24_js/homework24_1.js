function compose(...functions) {
    return function(value) {
        return functions.reduceRight(function(result, fn) {
            return fn(result);
        }, value);
    };
}

function double(x) {
    return x * 2;
}

function addTen(x) {
    return x + 10;
}

function square(x) {
    return x * x;
}

const composed = compose(double, addTen, square);

console.log(composed(7));