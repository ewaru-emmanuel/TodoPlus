const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./models/todo");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/todoApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(`${error}`));

app.use(express.json());

// POST route to create a new todo
app.post("/api/todos", async (req, res) => {
  try {
    const { todo } = req.body; // Use "todo" directly
    const newTodo = new Todo({ todo });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).json({ error: "Error adding todo" });
  }
});
//DELETE route to remove a todo
app.delete("/api/todos/:id", async (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndDelete(id);
  res.status(204).end();
});

// GET route to fetch all todos
app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Error fetching todos" });
  }
});
app.get("/", async (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});
app.get("/about", async (req, res) => {
  res.sendFile(path.resolve("../frontend/build", "index.html"));
});
app.get("/add", async (req, res) => {
  res.sendFile(path.resolve("../frontend/build", "index.html"));
});
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.listen(3000, console.log("Server listening too 3000"));
