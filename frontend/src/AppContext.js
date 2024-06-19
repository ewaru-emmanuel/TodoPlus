import React, { useState } from "react";

export const Context = React.createContext();

function AppContext({ children }) {
  const [todo, setTodo] = useState([]);

  console.log("Todo in context:", todo); // Add this line to log the todo state

  return (
    <>
      <Context.Provider value={{ todo, setTodo }}>{children}</Context.Provider>
    </>
  );
}

export default AppContext;
