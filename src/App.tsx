import React, { useState } from "react";
import ToDoList from "./ToDo.css/ToDoList";
import ToDo from "./ToDo.css/ToDo";

function App() {
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);

  const handleAddTodo = (text: string) => {
    // latest state snapshot
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="App">
      <ToDo onAddTodo={handleAddTodo} />
      <ToDoList items={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
