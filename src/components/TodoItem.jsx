import React from 'react';
import okIcon from '../assets/icons/icon-check.svg';
import crossMark from '../assets/icons/icon-cross.svg';
import { AiFillEdit } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

const TodoItem = (props) => {
  return (
    <li className='todoItem'>
      <figure
        title='Mark as completed'
        className={`todoItem__circle ${
          props.completed && 'todoItem__circle--complete'
        }`}
        onClick={props.onComplete}
      >
        <img
          src={okIcon}
          alt='Check Icon'
          className={`todoItem__circle__image ${
            props.completed && 'todoItem__circle__image--complete'
          }`}
        />
      </figure>
      <p
        className={`todoItem__task ${props.completed && 'todoItem--complete'}`}
        title='Task'
        onClick={props.onComplete}
      >
        {props.text}
      </p>
      <AiFillEdit
        className='todoItem__icon todoItem__icon--edit'
        title='Edit task'
        onClick={props.onEdit}
      />
      <AiOutlineClose
        className='todoItem__icon todoItem__icon--close'
        // src={crossMark}
        title='Delete task'
        onClick={props.onDelete}
      />
      {/* <img className='todoItem__crossMark' src={crossMark} title='Delete task' onClick={props.onDelete}></img> */}
    </li>
  );
};

export { TodoItem };
