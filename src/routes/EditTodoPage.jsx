import React from 'react';
import { TodoForm } from '../components/TodoForm';
import { useTodos } from '../Hooks/useTodos';
import { useLocation, useParams } from 'react-router-dom';

function EditTodoPage() {
  const params = useParams();
  const id = Number(params.id);

  const location = useLocation();
  const { stateUpdaters, state } = useTodos();
  const { editTodo } = stateUpdaters;
  const { getTodoContent, loading } = state;

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Loading...</p>;
  } else {
    const todo = getTodoContent(id);
    todoText = todo.text;
  }

  return (
    <TodoForm
      label='Edit todo'
      defaultContent={todoText}
      submitText='Edit'
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
}
export { EditTodoPage };
