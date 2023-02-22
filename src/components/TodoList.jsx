import React from 'react';

function TodoList({ error, loading, totalTodos, searchedTodos, onError, onLoading, onEmptyTodos, onNoResults, children, render, counter, }) {

  const renderFunc = children || render;

  return (
    <section className='todoList'>
      {error && onError()}
      {loading && onLoading()}

      {(!loading && !totalTodos) && onEmptyTodos()}

      {(!!totalTodos && !searchedTodos.length) && onNoResults()}

      {!loading && !error && searchedTodos.map((todo) => renderFunc(todo))}

      {counter()}

      <ul>{children}</ul>
    </section>
  );
}

export { TodoList };
