import db from "./../config/db.js";

const Task = {
  getAll: (callback) => {
    db.query("SELECT * FROM tasks", callback);
  },

  create: (data, callback) => {
    const { title, description, status } = data;
    db.query(
      "INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)",
      [title, description, status],
      callback
    );
  },

  update: (id, data, callback) => {
    const { title, description, status } = data;
    db.query(
      "UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?",
      [title, description, status, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query("DELETE FROM tasks WHERE id = ?", [id], callback);
  },
};

export default Task;
