// src/components/ThemeToggleButton.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import sunIcon from "../assets/sun.svg";
import sunIconWhite from "../assets/sun-white.svg";
import moonIcon from "../assets/moon-vector.svg";

const ThemeToggleButton = ({ className = "", ...props }) => {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light / dark"
      className={`p-2 rounded-full bg-[#F3EEEC] hover:bg-[#CC4B2C] transition-colors group ${className}`}
      {...props}
    >
      <img
        src={isDark ? moonIcon : sunIcon}
        alt="Toggle theme"
        className="w-6 h-6 group-hover:hidden"
      />
      {!isDark && (
        <img
          src={sunIconWhite}
          alt="Toggle theme hover"
          className="w-6 h-6 hidden group-hover:block"
        />
      )}
    </button>
  );
};

export default ThemeToggleButton;
