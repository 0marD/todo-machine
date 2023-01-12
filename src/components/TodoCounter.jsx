import React from 'react'

const TodoCounter = ({ totalTodos, completedTodos }) => {


  return (
    <div className='todoCounter'>
      <span title='Total number of tasks you have completed'>{completedTodos} out of {totalTodos} task completed</span>
      <span title='Clear completed tasks'>Clear completed</span>
    </div>
  )
}

export { TodoCounter }