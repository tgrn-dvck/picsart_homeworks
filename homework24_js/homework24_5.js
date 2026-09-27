function debounce(fn, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);

        timer = setTimeout(function() {
            fn(...args);
        }, delay);
    };
}