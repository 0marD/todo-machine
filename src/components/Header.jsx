import React, { cloneElement, useState } from 'react';
// import lightIcon from '../assets/icons/icon-moon.svg';
// import darkIcon from '../assets/icons/icon-sun.svg';

const Header = ({ theme }) => {
  // const [icon, setIcon] = useState(false);

  // function changeIcon() {
  //   setIcon((prevState) => !prevState);
  // }

  return (
    <header className='header'>
      <h1 className='header__title'>Todo</h1>
      {/* <figure className='header__iconContainer'>
        <img
          src={lightIcon}
          alt=''
          className={`header__iconContainer__icon ${icon && 'header__iconContainer__icon--active'
            }`}
          value={true}
          onClick={changeIcon}
          title='Switch to dark icon'
        />
        <img
          src={darkIcon}
          alt=''
          className={`header__iconContainer__icon ${!icon && 'header__iconContainer__icon--active'
            }`}
          value={false}
          onClick={changeIcon}
          title="Switch to light icon"
        /> */}
      {/* </figure> */}
    </header>
  );
};

export { Header };
