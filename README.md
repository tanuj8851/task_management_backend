# Task Management Web Application

This is a comprehensive Task Management System that empowers users to efficiently organize their tasks. The backend is built using Node.js and Express. The data is managed using MySQL.

## Features 

### Task Operations 

- **View Tasks  :** Displays all tasks for quick and easy reference.
- **Add Tasks :** Users can effortlessly add new tasks to the system.
- **Update Tasks :** Users have the flexibility to modify task details as needed.
- **Delete Tasks  :** Unwanted tasks can be removed to keep the task list organized.


## Tech Stack 
**Server:** Handles business logic, task operations, and database interactions using Node.js and Express.
**Database:** MySQL


## Project Setup
## Backend Setup
- Clone the repository.
- Navigate to the backend directory.
- Configure the MySQL database connection in application.properties.

 ## Database Setup

 ### 1. Create a MySQL database.

- **SQL**
  ```json
  {
   CREATE DATABASE task_management;
  }

- **Run the following schema to create the necessary tables**
   ```json
  {
  CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    details TEXT,
    completed BOOLEAN DEFAULT FALSE,
    taskCreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    userId INT,
    FOREIGN KEY (userId) REFERENCES users(userId))
  }
   



## API Endpoints Documentation

### 1. Create Task

- **Endpoint:** `POST http://localhost:8000/api/task/tasks`
- **Description:** Creates a new task for the specified user.
- **Request Body:**
  ```json
  {
  "title": "Task 5",
   "description": "This is the fifth task",
  "status": "pending"
  }

 - **Response Body:**
   ```json
   {
    "message": "Task Created",
    "id": 5,
    "title": "Task 5",
    "description": "This is the fifth task",
    "status": "pending"
   }


### 2. Get All Tasks
- **Endpoint**: GET- `http://localhost:8000/api/task/task`
- **Description**: Retrieves all tasks.
- Response Body:
```json
{
  "message": "Fetched all Tasks",
  "results": [
    {
            "id": 5,
            "title": "Task 5",
            "description": "This is the fifth task",
            "status": "pending",
            "created_at": "2024-11-18T17:53:08.000Z",
            "updated_at": "2024-11-18T17:53:08.000Z"
    }
  ]
 }


```
### 3. Update Task
- **Endpoint**: PUT- `http://localhost:8000/api/task/tasks/1`
- **Description**: Updates the details of a task.
- Request Body:
```json

{
   "title": "Task 5",
   "description": "This is the fifth task",
   "status": "completed"
}
```
- Response Body:
```json

{
   "message": "Task Updated",
    "id": "1",
    "title": "Task 5",
    "description": "This is the fifth task",
    "status": "completed"
}

```

### 5. Delete Task
- **Endpoint**: DELETE- `http://localhost:8080/api/task/tasks/5`
- **Description**: Deletes a task by its ID.
- Response Body:
```json

{
  "message": "Task deleted successfully"
}

```
---------------------------------------------------------------------------------------
## video
