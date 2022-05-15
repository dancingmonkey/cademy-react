import React, { useState } from 'react';
import NewTask from '../presentational/NewTask';
import TasksList from '../presentational/TasksList';

export default function AppFunction() {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask(prev => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = event => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks(prev => [newTask, ...prev]);
    setNewTask({});
  };
  const handleDelete = taskIdToRemove => {
    setAllTasks(prev => prev.filter(task => task.id !== taskIdToRemove));
  };

  return (
    <main className="rounded-sm bg-slate-700 p-4">
      <h1 className="ml-2 text-xl">Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}
