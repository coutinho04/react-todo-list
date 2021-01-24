import React from 'react';
import Task from './Task';

export default function TaskContainer({ children: tasks, onClick }) {
  return (
    <div style={{ margin: '20px' }}>
      {tasks.map((task) => (
        <Task onClick={onClick} key={task.id}>
          {task}
        </Task>
      ))}
    </div>
  );
}
