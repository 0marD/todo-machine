import React from 'react'
import okIcon from '../assets/icons/icon-check.svg'
import crossMark from '../assets/icons/icon-cross.svg'

const TodoItem = (props) => {
  return (
    <li className='todoItem'>
      <figure title='Mark as completed' className={`todoItem__circle ${props.completed && 'todoItem__circle--complete'}`} onClick={props.onComplete}>
        <img src={okIcon} alt='Check Icon' className={`todoItem__circle__image ${props.completed && 'todoItem__circle__image--complete'}`} />
      </figure>
      <div className="todoItem__wrapper"></div>
      <p className={`todoItem__task ${props.completed && 'todoItem--complete'}`} title='Task' onClick={props.onComplete}>{props.text}</p>
      <img className='todoItem__crossMark' src={crossMark} title='Delete task' onClick={props.onDelete}></img>
    </li >
  )
}

export { TodoItem }