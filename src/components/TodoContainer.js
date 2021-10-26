import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import InputTodo from './InputTodo';
import Header from './Header';

export default function TodoContainer() {
  const todo = [
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
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
  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setState((prevState) => [...prevState, newTodo]);
  };

  if (todos) {
    return (
      <div className="inner">
        <Header />

        <InputTodo handlesubmitprop={addTodo} />
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
      </div>
    );
  }
}
