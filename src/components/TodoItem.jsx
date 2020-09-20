import React, { useState } from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function TodoItem(props) {
  const [todoDone, setTodoDone] = useState(false);

  function isDone() {
    setTodoDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div
      className="list-item"
      style={todoDone ? { backgroundColor: "#d5f6f6" } : null}
    >
      <span className="todo">
        <button onClick={isDone} className="btn-list-item btn-checked">
          {todoDone ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}
        </button>
        <p
          className="todo-text"
          style={todoDone ? { textDecoration: "line-through" } : null}
        >
          {props.text}
        </p>
      </span>

      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
        className="btn-list-item btn-delete"
      >
        <DeleteForeverIcon />
      </button>
    </div>
  );
}

export default TodoItem;
