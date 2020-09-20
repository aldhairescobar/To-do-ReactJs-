import React, { useState } from "react";
import Header from "./components/Header";
import EntryForm from "./components/EntryForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [list, setList] = useState([]);

  function addTodo(todo) {
    if (todo.text !== "") {
      setList((prevValue) => {
        return [...prevValue, { id: todo.id, text: todo.text }];
      });
    }
  }

  function deleteTodo(id) {
    setList(() => {
      return list.filter((todo) => {
        return todo.id !== id;
      });
    });
  }

  return (
    <div className="container">
      <Header />
      <EntryForm onAdd={addTodo} />
      {list.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onDelete={deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default App;
