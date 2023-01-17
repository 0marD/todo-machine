import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()

function ThemeProvider(props) {

  const themesStyle = {
    dark: {
      bgPrimary: 'hsl(235, 21%, 11%)',
      bgSecundary: 'hsl(237, 14%, 26%)',
      font: 'hsl(234, 39%, 85%)',
      Hover: ' hsl(236, 33%, 92%)',
      active: 'hsl(220, 98%, 61%)',
      bgCheck: 'linear-gradient(135deg, rgba(87, 221, 255, 1) 0%, rgba(192, 88, 243, 1) 100%)',

    },
    light: {
      bgPrimary: 'hsl(0, 0%, 98%)',
      bgSecundary: 'hsl(236, 33%, 92%)',
      font: 'hsl(233, 11%, 84%)',
      Hover: ' hsl(236, 9%, 61%)',
      active: 'hsl(220, 98%, 61%)',
      bgCheck: 'linear-gradient(135deg, rgba(192, 88, 243, 1) 0%,  rgba(87, 221, 255, 1)  100%)',
    }
  }
  return (
    <ThemeContext.Provider value={{ themesStyle }}>
      {props.children}
    </ThemeContext.Provider>
  )
}


export { ThemeContext, ThemeProvider }