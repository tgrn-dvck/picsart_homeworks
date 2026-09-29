function createTaskQueue() {
  const queue = [];

  return {
    add(taskFn) {
      queue.push(taskFn);
    },

    runNext() {
      if (queue.length === 0) {
        console.log("No tasks");
        return;
      }

      const task = queue.shift();
      task();
    }
  };
}
