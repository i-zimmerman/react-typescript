import React from "react";

import "./ToDoList.css";

interface TodoList {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const ToDoList: React.FC<TodoList> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={() => onDeleteTodo(item.id)}> Delete todo</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
