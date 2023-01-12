import React from 'react'


const TodoForm = ({ addTodo, setOpenModal }) => {

  const [newTodoValue, setNewTodoValue] = React.useState('');


  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form action="" className="todoForm" onSubmit={onSubmit}>
      <div className='todoForm__label' htmlFor="">Create a new TODO</div>
      <textarea onChange={onChange} className='todoForm__textarea' placeholder='"Go to the supermarket"' rows={3} />
      <div className='todoForm__btns'>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button type='submit' >Create</button>
      </div>
    </form>
  )
}

export { TodoForm }