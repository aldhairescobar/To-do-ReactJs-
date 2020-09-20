import React, { useState, useEffect } from "react";
import uuid from "react-uuid";

function EntryForm(props) {
  const [todo, setTodo] = useState({
    id: "",
    text: "",
  });

  function handleChange(e) {
    const { value } = e.target;
    setTodo((prevValue) => {
      return {
        ...prevValue,
        text: value,
      };
    });
  }

  function addClicked(e) {
    setTodo((prevValue) => {
      return {
        ...prevValue,
        id: uuid(),
      };
    });
    e.preventDefault();
  }

  useEffect(() => {
    props.onAdd(todo);
    return () => {
      setTodo({
        id: "",
        text: "",
      });
    };
  }, [todo.id]);

  return (
    <form onSubmit={addClicked} className="form">
      <input
        value={todo.text}
        onChange={handleChange}
        placeholder="Add a task"
        type="text"
        required
      />
      <button type="submit" className="btn btn-add">
        Add
      </button>
    </form>
  );
}

export default EntryForm;
