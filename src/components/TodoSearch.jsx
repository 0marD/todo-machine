import React from 'react'
import searchIcon from '../assets/icons/search-icon.svg'

const TodoSearch = ({ searchValue, setSearchValue }) => {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        style={{ backgroundImage: `url(${searchIcon})` }}
        className='todoSearch'
        placeholder='Search'
        title='Search for task'
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </>
  )
}

export { TodoSearch }