import { useTheme } from '../hooks/useTheme';
import { Palette } from 'lucide-react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      data-cursor="Theme"
      title={`Current: ${theme.replace('-', ' ')}`}
    >
      <Palette size={20} className="theme-icon" />
      <span className="theme-name">{theme.split('-')[0]}</span>
    </button>
  );
};

export default ThemeToggle;
