import React, { useState } from "react";
import classes from "./TodoList.module.css";
import ToggleButton from "../../Ui/ToggleButton";
import DeleteButton from "../../Ui/DeleteButton";
export default function TodoList(props) {
  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState(props.value);

  function handleEdit() {
    setEditMode(true);
  }

  function handleSave(event) {
    if (event.key == "Enter") {
      setEditMode(false);
      const updatedTasks = props.task.map((task) =>
        task.id === props.id ? { ...task, value: editValue } : task
      );
      props.setTask(updatedTasks);
    }
  }
  return (
    <div key={props.id} className={classes.todo__list}>
      {editMode ? (
        <input
          className={classes.input}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleSave}
        />
      ) : (
        <>
          <ToggleButton {...props} />
          <label
            onClick={handleEdit}
            style={
              props.status
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
            className={classes.todo__input}
          >
            {props.value}
          </label>
          <DeleteButton {...props} />
        </>
      )}
    </div>
  );
}
