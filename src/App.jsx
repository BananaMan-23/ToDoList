import React, { useState } from "react";
import Header from "./Components/Header/Header";
import TodoInput from "./Components/todoInput/TodoInput";
import Footer from "./Components/Footer/Footer";
import TodoList from "./Components/TodoList/TodoList";
function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [taskFilter, setTaskFilter] = useState("");
  const count = task.length;

  function addTask() {
    const newTask = {
      id: Math.random(),
      value: input,
      status: false,
      editMode: false,
    };
    if (input.trim()) {
      let Todo = [newTask, ...task];
      setTask(Todo);
      setInput("");
    }
  }
  function handleEnter(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }
  function removeTask(id) {
    let del = task.filter((e) => e.id !== id);
    setTask(del);
  }
  function toggleTask(id) {
    let toggle = task.map((e) =>
      e.id === id ? { ...e, status: !e.status } : { ...e }
    );
    setTask(toggle);
  }

  let copiTask = task;
  switch (taskFilter) {
    case "All":
      copiTask = task;
      break;
    case "Active":
      copiTask = task.filter((e) => e.status === false);
      break;
    case "Completed":
      copiTask = task.filter((e) => e.status === true);
      break;
    default:
      break;
  }

  function removeCompled() {
    const activeTasks = task.filter((e) => e.status === false);
    setTask(activeTasks);
  }

  const taskList = copiTask.map((e) => (
    <TodoList
      id={e.id}
      value={e.value}
      status={e.status}
      removeTask={removeTask}
      toggleTask={toggleTask}
      task={task}
      setTask={setTask}
    />
  ));
  return (
    <div className="App">
      <Header />
      <TodoInput handleEnter={handleEnter} input={input} setInput={setInput} />
      {taskList}
      {task.length === 0 ? null : (
        <Footer
          setTaskFilter={setTaskFilter}
          count={count}
          removeCompled={removeCompled}
        />
      )}
    </div>
  );
}

export default App;
