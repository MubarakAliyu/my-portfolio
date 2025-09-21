// src/context/ThemeContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

// Context
const ThemeContext = createContext();

// Provider
export const ThemeProvider = ({ children }) => {
  // initialize from localStorage or system preference
  const getInitial = () => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") return "dark";
      if (saved === "light") return "light";
      // fallback to system preference
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      }
    } catch (e) {}
    return "light";
  };

  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    const root = document.documentElement; // <html>
    const body = document.body;            // <body>

    if (theme === "dark") {
      root.classList.add("dark");          // Tailwind dark: utilities
      body.classList.add("theme-dark");    // your custom CSS
    } else {
      root.classList.remove("dark");
      body.classList.remove("theme-dark");
    }

    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  const toggle = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider
      value={{ theme, isDark: theme === "dark", setTheme, toggle }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use in components
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
