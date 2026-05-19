import React, { useState, useEffect } from 'react';
import { ThemeContext, type ThemeType } from './theme-context';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const saved = localStorage.getItem('webdevguru-theme');
    // Basic migration check for renamed/removed themes
    if (saved === 'nordic-light') return 'solar-flare';
    if (saved === 'cyberpunk') return 'neon';
    return (saved as ThemeType) || 'dark-luxury';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('webdevguru-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const themes: ThemeType[] = ['dark-luxury', 'solar-flare', 'midnight-royal', 'forest-luxury', 'neon', 'soft-rose'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
