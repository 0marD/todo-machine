import React from 'react'

const Filter = ({ showActive }) => {



  return (
    <div className='filter' >
      <span title='Show all' >All</span>
      <span title='Show ongoing tasks' onClick={showActive}>Active</span>
      <span title='Show completed tasks' >Completed</span>
    </div>
  )
}

export { Filter }