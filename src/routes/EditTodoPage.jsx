import React from 'react';
import { TodoForm } from '../components/TodoForm';
import { useTodos } from '../customHooks/useTodos';
import { useParams } from 'react-router-dom';

const EditTodoPage = () => {
  const params = useParams();
  const id = Number(params.id);
  const { stateUpdaters } = useTodos();
  const { editTodo } = stateUpdaters;
  return (
    <TodoForm
      label='Edit todo'
      submitText='Edit'
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
};

export { EditTodoPage };
