exports.helloWorld = (req, res) => {
  res.status(200).send("Hello World!");
};

exports.toggleToDoItem = (req, res) => {
  try {
    todoArr = req.body.todo_arr;
    todoId = req.body.todo_id;

    // Handling edge cases
    if (todoArr.length < 1 || todoId < 1) {
      throw new Error("Check array length or value assigned to 'id'");
    }

    // Toggle the 'completed' property
    todoArr[todoId - 1].completed = !todoArr[todoId - 1].completed;

    // Send back the updated array
    res.status(200).json({
      status: "success",
      updated_TodoArr: todoArr,
    });
    // res.status(200).send("/toggle-todo-item is working fine!");
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err.stack,
    });
  }
};
