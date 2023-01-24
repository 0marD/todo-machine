import React from 'react';
import { TodoForm } from '../components/TodoForm';
import { useTodos } from '../customHooks/useTodos';

const NewTodoPage = () => {

  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;

  return (
    <TodoForm
      label='Create a new todo'
      submitText='Create'
      submitEvent={(text) => addTodo(text)}
    />
  );
};

export { NewTodoPage };
