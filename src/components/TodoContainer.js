import { useState } from 'react';
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

  const [state, setState] = useState(todo);
  const todos = state;
  const changeState = (id) => {
    setState(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  const delList = (id) => {
    setState(
      todos.filter((todo) => todo.id !== id),
    );
  };

  if (todos) {
    return (
      <ul>

        {todos.map((todo) => (
          <TodosList
            title={todo.title}
            completed={todo.completed}
            key={todo.id}
            id={todo.id}
            handlechange={changeState}
            deletelist={delList}
          />
        ))}
      </ul>

    );
  }
}
