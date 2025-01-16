An example for a POST request to toggle 'completed' property of ToDo Array

Request URL --> localhost:3000/toggle-todo-item

Request Body --> 

{
    "todo_id": 3,
    "todo_arr": [
        {"id": 1, "text": "Task 1", "completed": false},
        {"id": 2, "text": "Task 2", "completed": true},
        {"id": 3, "text": "Task 3", "completed": false},
        {"id": 4, "text": "Task 4", "completed": true},
        {"id": 5, "text": "Task 5", "completed": false}
    ]
}

