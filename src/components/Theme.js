import React, { useState, useEffect } from 'react';

function ChangeTheme() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
  );


  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', theme);
  };
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme])

  return { theme, toggleTheme };
}

export default ChangeTheme;
