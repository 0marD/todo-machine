import React from 'react';
import { useSearchParams } from 'react-router-dom';
import searchIcon from '../assets/icons/search-icon.svg';

const TodoSearch = ({ setSearchValue, loading }) => {
  //
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsValue = searchParams.get('search');

  const onSearchValueChange = ({ target: { value } }) => {
    setSearchValue(value);
    setSearchParams({ search: value });
  };

  return (
    <>
      <input
        style={{ backgroundImage: `url(${searchIcon})` }}
        className='todoSearch'
        placeholder='Search'
        title='Search for task'
        value={paramsValue ?? ''}
        onChange={onSearchValueChange}
        disabled={loading}
      />
    </>
  );
};

export { TodoSearch };
