import React from 'react';
import { useNavigate } from 'react-router-dom';

const TodoForm = (props) => {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    // setOpenModal(false);
    navigate('/');
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate('/');
    // setOpenModal(false);
  };

  return (
    <form action='' className='todoForm' onSubmit={onSubmit}>
      <label className='todoForm__label'>
        {/* Create a new TODO */}
        {props.label}
      </label>
      <textarea
        onChange={onChange}
        className='todoForm__textarea'
        placeholder='"Go to the supermarket"'
        rows={3}
      />
      <div className='todoForm__btns'>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button type='submit'>
          {/*Create*/}
          {props.submitText}
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
