import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import Input from "./components/Input";
import Tasks from "./components/Tasks";

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addNewTask = () => {
    if (taskInput === "") {
      alert("Please enter a task");
      return;
    }
    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const updateTaskStatus = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      }),
    );
  };

  const deletetTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      }),
    );
  };

  const deleteAll = () => {
    const confrimMsg = confirm("Are You Sure !");
    if (confrimMsg) {
      setTasks([]);
    }
  };

  return (
    <div className="container">
      <Title />
      <Input
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        addNewTask={addNewTask}
      />
      <Tasks
        tasks={tasks}
        deleteAll={deleteAll}
        updateTaskStatus={updateTaskStatus}
        deletetTask={deletetTask}
      />
    </div>
  );
};

export default App;
