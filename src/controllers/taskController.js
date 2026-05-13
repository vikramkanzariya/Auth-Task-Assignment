const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const userId = req.user.userId;

    // console.log("User ID in Create Task:", user);

    const task = await Task.create({
      title: title,
      userId: userId
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.userId });

    if (tasks.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Tasks Found"
      });
    }
    res.status(200).json({ success: true, message: "Tasks Found", data: tasks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      { title: title },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    res.status(200).json({ success: true, message: "Task Updated Successfully", data: task });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE TASK
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId
    });

    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    res.status(200).json({ success: true, message: "Task Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};