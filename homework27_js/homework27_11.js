function delayedAccumulator(initial) {
  let total = initial;

  return function(amount, callback) {
    total += amount;

    setTimeout(() => {
      callback(total);
    }, 500);
  };
}
