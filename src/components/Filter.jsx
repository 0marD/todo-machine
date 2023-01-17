import React from 'react'
import { ThemeContext } from '../themeContext/ThemeContext'

const Filter = () => {
  return (
    <div className='filter' >
      <span title='Show all' >All</span>
      <span title='Show ongoing tasks' >Active</span>
      <span title='Show completed tasks' >Completed</span>
    </div>
  )
}

export { Filter }