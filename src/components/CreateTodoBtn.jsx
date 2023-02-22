import React from 'react';

const CreateTodoBtn = (props) => {
  // function openModal() {
  //   props.setOpenModal((prevState) => !prevState);
  // }

  return (
    <button
      title='Create a new task'
      className='createTodobtn'
      onClick={props.onClick}
      // onClick={openModal}
    >
      +
    </button>
  );
};

export { CreateTodoBtn };
