import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = (props) => {
  const navigate = useNavigate();

  return (
    <div className='notFoundPage'>
      <div id='clouds'>
        <div className='cloud x1'></div>
        <div className='cloud x1_5'></div>
        <div className='cloud x2'></div>
        <div className='cloud x3'></div>
        <div className='cloud x4'></div>
        <div className='cloud x5'></div>
      </div>
      <div className='c'>
        <div className='_404'>404</div>
        <hr />
        <div className='_1'>THE PAGE</div>
        <div className='_2'>WAS NOT FOUND</div>
        <a className='btn' href='#' onClick={() => navigate('/')}>
          BACK TO HOME
        </a>
      </div>
    </div>
  );
};

export { NotFoundPage };
