import React, { useState } from 'react'

const useStorageListener = (sincronize) => {

  const [storageListener, setStorageListener] = useState(false)

  window.addEventListener(('storage'), (change) => {
    if (change.key === 'TODOS_V1') {
      setStorageListener(true)
    }
  })

  const toggleShow = () => {
    sincronize()
    setStorageListener(false)
  }

  return {
    show: storageListener, toggleShow
  }

}


export { useStorageListener }