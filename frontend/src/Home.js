import React, { useContext, useState, useEffect } from "react";
import { Context } from "./AppContext";
import "./TodoList.css"; // Import the CSS file for the TodoList component

function TodoList() {
  const { todo, setTodo } = useContext(Context);
  const [filter, setFilter] = useState("None");
  const [selectedTodo, setSelectedTodo] = useState(null); // To track the selected todo for displaying details
  const [currentPage, setCurrentPage] = useState(1); // Track the current page number
  const [itemsPerPage, setItemsPerPage] = useState(6); // Set the number of items per page

  useEffect(() => {
    fetch("api/todos")
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, []);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  // Create a copy of the todo array to avoid mutating the original array
  let filterList = [...todo];
  if (filter === "A-Z") {
    filterList = filterList.sort((a, b) =>
      (a.todo || "").localeCompare(b.todo || "")
    );
  } else if (filter === "Z-A") {
    filterList = filterList.sort((a, b) =>
      (b.todo || "").localeCompare(a.todo || "")
    );
  }

  // Calculate the index of the last todo item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first todo item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Slice the todo list to display only the items for the current page
  const currentItems = filterList.slice(indexOfFirstItem, indexOfLastItem);

  const RemoveTodo = (id) => {
    fetch(`api/todos/${id}`, {
      method: "DELETE",
    }).then(() => setTodo(todo.filter((todo) => todo._id !== id)));
  };

  const openDetailsModal = (todoItem) => {
    setSelectedTodo(todoItem);
  };

  const closeDetailsModal = () => {
    setSelectedTodo(null);
  };

  // Function to handle page navigation to the next page
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Function to handle page navigation to the previous page
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <h3>Todo App</h3>
      <select value={filter} onChange={handleChange}>
        <option value="None">None</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <ul className="todo-list">
        {currentItems.map((todoItem) => (
          <li key={todoItem._id} className="todo-item">
            {todoItem.todo}{" "}
            <button onClick={() => RemoveTodo(todoItem._id)}>Delete</button>{" "}
            <button onClick={() => openDetailsModal(todoItem)}>Details</button>{" "}
          </li>
        ))}
      </ul>
      {selectedTodo && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeDetailsModal}>
              &times;
            </span>
            <h2>{selectedTodo.todo}</h2>
            <p>{selectedTodo.description}</p>
            {/* Add more details here as needed */}
          </div>
        </div>
      )}
      {/* Pagination buttons */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <button
          onClick={nextPage}
          disabled={currentItems.length < itemsPerPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default TodoList;
