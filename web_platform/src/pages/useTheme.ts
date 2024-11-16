import { useState, useEffect } from 'react';

const useTheme = () => {
  // State to store the theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage and update the theme when the component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('isDarkMode');
      if (storedTheme) {
        setIsDarkMode(JSON.parse(storedTheme));
      }
    }
  }, []); // Empty dependency array to run only on mount

  // Toggle theme and store in localStorage
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', JSON.stringify(newMode)); // Store the new theme
      return newMode;
    });
  };

  return [isDarkMode, toggleTheme];
};

export default useTheme;
