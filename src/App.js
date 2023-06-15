import { useEffect, useState } from "react";
import Form from "./components/Form";
import "./App.css";
import TaskList from "./components/TaskList";
function App() {
  const [tasks, setTask] = useState([]);
  //create task
  const createTask = (title, description) => {
    const updatedTasks = [...tasks, { title, description, id: Date.now() }];
    setTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  //delete task
  const deleteTask = (id) => {
    const taskAfterDelete = tasks.filter((task) => {
      return task.id !== id;
    });
    setTask(taskAfterDelete);
    localStorage.setItem("tasks", JSON.stringify(taskAfterDelete));
  };
  //Edit task
  const editTask = (newTitle, newDescription, id) => {
    const tasksAfterEdited = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: newTitle, description: newDescription };
      }
      return task;
    });
    setTask(tasksAfterEdited);
    localStorage.setItem("tasks", JSON.stringify(tasksAfterEdited));
  };
  // after refresh the page get all task from localStorage
  useEffect(() => {
    const initTask = JSON.parse(localStorage.getItem("tasks")) || [];
    setTask(initTask);
  }, []);

  return (
    <div className="container">
      
      <Form onSubmit={createTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
}

export default App;
