import { createContext } from 'react';

export type ThemeType = 'dark-luxury' | 'solar-flare' | 'midnight-royal' | 'forest-luxury' | 'neon' | 'soft-rose';

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
