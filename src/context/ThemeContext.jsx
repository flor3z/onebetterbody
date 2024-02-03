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
      <div className={darkMode ? 'dark' : ''}>
        <span
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-10 right-2 sm:right-10 bg-slate-400 p-2 rounded-full shadow-md hover:bg-slate-200 transition-all ease-out duration-200 cursor-pointer"
        >
          {darkMode ? <span>🌞</span> : <span>🌙</span>}
        </span>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
