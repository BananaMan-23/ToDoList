import React, { useState } from "react";
import classes from "./TodoList.module.css";
import ToggleButton from "../../Ui/ToggleButton";
import DeleteButton from "../../Ui/DeleteButton";

import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import theme from "../../Fonts/Font";

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
    <ThemeProvider theme={theme}>
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
            <Typography
            sx={{fontFamily: 'Segoe UI Symbol'}}
            variant="span"
              onClick={handleEdit}
              style={
                props.status
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
              className={classes.todo__input}
            >
              {props.value}
            </Typography>
            <DeleteButton {...props} />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}
