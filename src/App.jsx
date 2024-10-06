import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleTodo,
  removeCompleted,
  setFilter,
} from "./redux/actions";
import Header from "./Components/Header/Header";
import TodoInput from "./Components/todoInput/TodoInput";
import Footer from "./Components/Footer/Footer";
import TodoList from "./Components/TodoList/TodoList";
import { selectTasks, selectFilter } from "./redux/selectors";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);
  const [input, setInput] = useState("");

  function addTask() {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  }

  function handleEnter(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  function removeTask(id) {
    dispatch(removeTodo(id));
  }

  function toggleTask(id) {
    dispatch(toggleTodo(id));
  }

  function removeCompled() {
    dispatch(removeCompleted());
  }

  function setFilterHandler(filter) {
    dispatch(setFilter(filter));
  }

  let filteredTasks = tasks;
  switch (filter) {
    case "All":
      filteredTasks = tasks;
      break;
    case "Active":
      filteredTasks = tasks.filter((task) => task.status === false);
      break;
    case "Completet":
      filteredTasks = tasks.filter((task) => task.status === true);
      break;
    default:
      break;
  }

  return (
    <div className="App">
      <Header />
      <TodoInput handleEnter={handleEnter} input={input} setInput={setInput} />
      {filteredTasks && filteredTasks.map((task) => (
        <TodoList
          id={task.id}
          value={task.value}
          status={task.status}
          removeTask={removeTask}
          toggleTask={toggleTask}
        />
      ))}
      {tasks.length === 0 ? null : (
        <Footer
          count={tasks.length}
          removeCompled={removeCompled}
          setFilter={setFilterHandler}
        />
      )}
    </div>
  );
}

export default App;
