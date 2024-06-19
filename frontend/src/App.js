import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import TodoList from "./Home";
import About from "./About";
import AddTodo from "./AddTodo";
import AppContext from "./AppContext";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <AppContext>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/about" element={<About />} />
            <Route path="/add" element={<AddTodo />} />
          </Routes>
        </AppContext>
      </Router>
    </>
  );
}

export default App;
