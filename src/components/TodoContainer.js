import React, { useState } from 'react';
import TodosList from './TodosList';

export default function TodoContainer() {
  const todo = [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ];

  const [state] = useState(todo);
  return (
    // eslint-disable-next-line react/jsx-key
    state.map((todo) => <TodosList title={todo.title} completed={todo.completed} />)
  );
}
