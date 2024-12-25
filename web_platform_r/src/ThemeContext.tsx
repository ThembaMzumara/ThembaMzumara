// src/ThemeContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Get the theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // Update CSS custom properties for the root element (html or body)
    updateRootTheme(savedTheme || 'light');
  }, []);

  const updateRootTheme = (theme: Theme) => {
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--background', '#262629');
      document.documentElement.style.setProperty('--foreground', '#d5d5d9');
    } else {
      document.documentElement.style.setProperty('--background', '#d5d5d9');
      document.documentElement.style.setProperty('--foreground', '#000000');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save to localStorage
    updateRootTheme(newTheme); // Update CSS custom properties
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
