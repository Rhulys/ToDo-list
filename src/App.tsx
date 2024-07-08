import React, { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

interface Task {
  id: number;
  task: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks])

  const addTask = (task: string) => {
    const newTask = { id: Date.now(), task};
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="items-center flex flex-col bg-green-950 h-lvh text-white">
      <div className="bg-green-600 w-3/4 md:w-1/2 mt-20 rounded-xl items-center flex flex-col">
        <h1 className="text-4xl mt-5">To-do List</h1>
        <h3 className="mt-5 text-xl">Adicione novas tarefas!</h3>
        <AddTaskForm addTask={addTask} />
      </div>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <p className="mt-10">&copy; 2024 - Rhulyanderson Sander</p>
    </div>
  );
};

export default App;
