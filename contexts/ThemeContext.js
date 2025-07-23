'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Create the context with a default value
const ThemeContext = createContext();

// Create a custom hook to make it easier to use the context
export function useTheme() {
  return useContext(ThemeContext);
}

// Create the provider component that will wrap your application
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  // This effect runs only on the client side after the component mounts.
  // It adds the current theme's class ('light' or 'dark') to the <body> element.
  useEffect(() => {
    const body = window.document.body;
    body.classList.remove('light', 'dark');
    body.classList.add(theme);
  }, [theme]); // The effect re-runs whenever the 'theme' state changes

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // The value that will be available to all components wrapped by this provider
  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}