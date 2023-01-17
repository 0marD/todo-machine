import React from 'react'

const NoResultsMsg = ({ searchText }) => {
  return (
    <p className='todoItem todoItem__msg'>No results for "{searchText}"</p>
  )
}

export { NoResultsMsg }