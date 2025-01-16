const express = require("express");

const rootController = require("../controllers/rootController");

const router = express.Router();

// Simple route for testing if API is working
router.get("/", rootController.helloWorld);

// Route to toggle the 'completion' of To-Do item
router.post("/toggle-todo-item", rootController.toggleToDoItem);

// The ToDo Array is sent in the request body as 'todo_arr'
// And the Id of the ToDo Item is sent as 'todo_id'.
// Plz refer to README.md for for an example.

module.exports = router;
