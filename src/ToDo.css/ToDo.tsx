import React, { useRef } from "react";

import "./ToDo.css";

type ITodo = {
  onAddTodo: (text: string) => void;
};

const ToDo: React.FC<ITodo> = ({ onAddTodo }) => {
  const userInput = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = userInput.current!.value;
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo text</label>
        <input type="text" id="todo-text" ref={userInput} />
      </div>
      <button type="submit">add todo</button>
    </form>
  );
};

export default ToDo;
