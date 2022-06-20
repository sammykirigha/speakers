import React, { createContext, useState } from 'react';
import useTheme from '../hooks/useTheme';

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
	const [theme, setTheme, themeToggle] = useTheme()


  return (
	  <ThemeContext.Provider value={{theme, setTheme, themeToggle}}>
		  {children}
	</ThemeContext.Provider>
  )
}

export default ThemeProvider