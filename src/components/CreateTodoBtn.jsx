import React from 'react'
import { ThemeProvider } from './themeContext/ThemeContext';

const CreateTodoBtn = (props) => {

  function openModal() {
    props.setOpenModal(prevState => !prevState);
  }

  return (
    <button
      title='Create a new task'
      className='createTodobtn'
      onClick={openModal}

    >
      +
    </button>
  )
}

export { CreateTodoBtn }