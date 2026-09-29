function createPolling(fn, interval) {
  const timer = setInterval(() => {
    fn();
  }, interval);

  return function stop() {
    clearInterval(timer);
  };
}
