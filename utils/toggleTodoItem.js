const toggleTodoItem = (id, todoArr) => {
  // Look out for edge cases, such as id = 0;
  todoArr[id - 1].completed = !todoArr[id - 1].completed;

  return todoArr;
};

module.exports = toggleTodoItem;
