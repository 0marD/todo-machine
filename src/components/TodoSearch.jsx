import React from 'react'
import searchIcon from '../assets/icons/search-icon.svg'
import { AiOutlineSearch } from "react-icons/ai";

const TodoSearch = ({ searchValue, setSearchValue, loading }) => {

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
        disabled={loading}
      />
    </>
  )
}

export { TodoSearch }