import React, { useContext, useState } from "react";
import { Context } from "./AppContext";
import "./AddTodo.css"; // Import the CSS file for styling

function AddTodo() {
  const [text, setText] = useState("");
  const { setTodo } = useContext(Context);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const AddTodo = () => {
    fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: text,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response was not okay");
        }
        return response.json();
      })
      .then((data) => {
        setTodo((prev) => [...prev, data]);
        console.log("Todo added successfully");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  };

  return (
    <div className="add-todo-container">
      <input
        type="text"
        placeholder="Add todo..."
        value={text}
        onChange={handleInput}
        className="todo-input"
      />
      <button onClick={AddTodo} className="add-button">
        Add
      </button>
    </div>
  );
}

export default AddTodo;
