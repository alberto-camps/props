import './App.css'
import { useState } from 'react';
import Task from "./components/Task";
import AddTaskForm from "./components/AddTaskForm";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: false },
    { id: 3, text: 'Hacer ejercicio', completed: false },
  ]);

  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text: text,
      completed: false
    }

    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  const markTask = (taskId) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId
        ? { ...task, completed: !task.completed }
        :task
      )
    )
  }

  const paintTask = () => tasks.map(task => (
      <Task 
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        markTask={markTask}
      />
    ))
  

  return (
    <>
    <h1>Mi lista de tareas</h1>
    <AddTaskForm addTask={addTask} />
     {paintTask()}
    </>
  );
};

export default App;

