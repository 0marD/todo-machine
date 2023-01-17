import React, { cloneElement, useState } from 'react'
import lightIcon from '../assets/icons/icon-moon.svg'
import darkIcon from '../assets/icons/icon-sun.svg'

const Header = () => {
  const [theme, setTheme] = useState(false)

  function changeTheme() {
    setTheme(prevState => !prevState)
  }

  return (
    <header className='header'>
      <h1 className='header__title'>Todo</h1>
      <figure className='header__theme'>
        <img
          src={lightIcon}
          alt=''
          className={`header__theme__icon ${theme && 'header__theme__icon--active'
            }`}
          value={true}
          onClick={changeTheme}
          title='Switch to dark theme'
        />
        <img
          src={darkIcon}
          alt=''
          className={`header__theme__icon ${!theme && 'header__theme__icon--active'
            }`}
          value={false}
          onClick={changeTheme}
          title="Switch to light theme"
        />
      </figure>
    </header>
  )
}

export { Header }