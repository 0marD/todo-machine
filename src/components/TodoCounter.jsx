import React from 'react'

const TodoCounter = (props) => {


  return (
    <div className='todoCounter'>
      <span title='Total number of tasks you have completed'>{props.completedTodos} out of {props.totalTodos} task completed</span>
      {props.filter}
      <span title='Clear completed tasks'>Clear completed</span>
    </div>
  )
}

export { TodoCounter }