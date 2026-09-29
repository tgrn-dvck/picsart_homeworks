function runSequentially(functions) {
  function run(index) {
    if (index >= functions.length) {
      return;
    }

    functions[index]();

    setTimeout(() => {
      run(index + 1);
    }, 100);
  }

  run(0);
}
