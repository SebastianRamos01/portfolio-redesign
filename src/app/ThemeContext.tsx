"use client"

import { createContext, useState, useContext, ReactNode } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  variants: {
    nightMode: {
      backgroundColor: string;
      color: string;
    };
    lightMode: {
      backgroundColor: string;
      color: string;
    };
  };
  artVariants: {
    nightMode: {
      backgroundColor: string;
      color: string;
    };
    lightMode: {
      backgroundColor: string;
      color: string;
    };
  };
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const variants = {
    nightMode: {
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
    },
    lightMode: {
      backgroundColor: '#ffffff',
      color: '#1a1a1a',
    },
  };
  
  const artVariants = {
    nightMode: {
      backgroundColor: '#333333',
      color: '#ffffff',
    },
    lightMode: {
      backgroundColor: '#F5F5F5',
      color: '#333333',
    },
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const values = {
    isDarkMode,
    setIsDarkMode,
    variants,
    artVariants,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};