function add(a, b, c) {
    return a + b + c;
}

function curry(fn) {
    return function(a) {
        return function(b) {
            return function(c) {
                return fn(a, b, c);
            };
        };
    };
}

console.log(curry(add)(4)(5)(6));