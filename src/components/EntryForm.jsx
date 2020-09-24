import React, { useState, useEffect, useRef } from "react";
import uuid from "react-uuid";

function EntryForm(props) {
  const [todo, setTodo] = useState({
    id: "",
    text: "",
  });
  const inputRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setTodo((prevValue) => {
      return {
        ...prevValue,
        text: value,
      };
    });
  }

  /* Using uuid to get a unique ID for each todo item */
  function addClicked(e) {
    setTodo((prevValue) => {
      return {
        ...prevValue,
        id: uuid(),
      };
    });
    e.preventDefault();
    inputRef.current.focus();
  }

  /* useEffect is waiting to the id in order to execute the function "onAdd" and add the todo item to the list array in the App.js, after that it cleans the state so the input is empty and the user can add another todo */

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
        ref={inputRef}
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
