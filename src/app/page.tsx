"use client";
import React, { useState } from 'react';
import TaskCard, { Task } from './components/molecules/taskcard';
import TaskForm from './components/molecules/taskform'; // Assuming you have a TaskForm component

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="relative flex place-items-center ">
          <TaskForm addTask={handleAddTask} />
        </div>
        <div className='flex gap-4 flex-wrap'>
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;