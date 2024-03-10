import React from "react";
import classes from "./TodoInput.module.css";
export default function TodoInput(props) {
  return (
    <div className={classes.todo}>
      <div className={classes.todo_input}>
        <input
          value={props.input}
          onChange={e => props.setInput(e.target.value)}
          onKeyDown={props.handleEnter}
          className={classes.input}
          type="text"
          placeholder="What needs to be done ?"
        />
      </div>
    </div>
  );
}
