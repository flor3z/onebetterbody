import React, { useEffect } from 'react';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem('theme')) || false;
  };

  const [darkMode, setDarkMode] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
