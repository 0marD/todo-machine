import React from 'react';

function TodoList(props) {
  return (
    <section className='todoList'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}

      {props.searchedTodos.map(props.render)}

      {props.counter()}

      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };