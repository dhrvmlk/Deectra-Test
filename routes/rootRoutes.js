const express = require("express");

const rootController = require("../controllers/rootController");

const router = express.Router();

// Simple route for testing if API is working
router.get("/", rootController.helloWorld);

// Route to toggle the 'completion' of To-Do item
router.post("/toggle-todo-item", rootController.toggleToDoItem);

// The ToDo Array is sent in the request body as 'todo_arr'
// And the Id of the ToDo Item is sent as 'todo_id'.
// There's a file named 'doc.txt' at the root of this project, plz refer to that for the example

module.exports = router;
