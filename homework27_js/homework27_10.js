function createMemo(fn) {
  let lastArg;
  let lastResult;
  let hasCache = false;

  return function(arg) {
    if (hasCache && arg === lastArg) {
      return lastResult;
    }

    lastArg = arg;
    lastResult = fn(arg);
    hasCache = true;

    return lastResult;
  };
}
