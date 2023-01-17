import React from 'react'
import { useStorageListener } from '../customHooks/useStorageListener'


const ChangeAlert = ({ sincronize }) => {
  const { show, toggleShow } = useStorageListener(sincronize)
  if (show) {
    return (
      <div className='changeAlert'>
        <div className="changeAlert__contents">
          <p className='changeAlert__contents__msg'>It appears that there has been a change on another tab or window</p>
          <button className="changeAlert__contents__btn" onClick={() => toggleShow(false)}>Reload window</button>
        </div>
      </div>
    )
  } else {
    null
  }
}

export { ChangeAlert }