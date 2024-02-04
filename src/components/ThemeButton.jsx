import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeButton = () => {
  const [darkMode, setDarkMode] = useContext(ThemeContext);

  return (
    <span
      onClick={() => setDarkMode(!darkMode)}
      className="absolute top-10 right-2 sm:right-10 bg-slate-400 p-2 rounded-full shadow-md hover:bg-slate-200 transition-all ease-out duration-200 cursor-pointer"
    >
      {darkMode ? <span>🌞</span> : <span>🌙</span>}
    </span>
  );
};

export default ThemeButton;
