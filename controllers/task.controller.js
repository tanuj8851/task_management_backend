import Task from "./../models/taskModel.js";

export const getAllTasks = (req, res) => {
  Task.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: "Fetched all Tasks", results });
  });
};

export const createTask = (req, res) => {
  const data = req.body;
  Task.create(data, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res
      .status(201)
      .json({ message: "Task Created", id: results.insertId, ...data });
  });
};

export const updateTask = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Task.update(id, data, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0)
      return res.status(404).json({ error: "Task not found" });
    res.status(200).json({ message: "Task Updated", id, ...data });
  });
};

export const deleteTask = (req, res) => {
  const id = req.params.id;
  Task.delete(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0)
      return res.status(404).json({ error: "Task not found" });
    res.status(200).json({ message: "Task deleted successfully" });
  });
};
