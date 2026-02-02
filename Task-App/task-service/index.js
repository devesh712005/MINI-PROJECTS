const express = require("express");

const mongoose = require("mongoose");
const PORT = 3002;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://mongo:27017/tasks")
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log("Mongodb connection error: ", err));

const TaskSchema = mongoose.Schema({
  title: String,
  description: String,
  userId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model("Task", TaskSchema);

app.get("/tasks", async (req, res) => {
  const task = await Task.find();
  res.status(200).json(task);
});

app.post("/tasks", async (req, res) => {
  const { title, description, userId } = req.body;
  try {
    const task = new Task({ title, description, userId });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error("Error saving: ", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Task service  is running at ${PORT}`);
});
