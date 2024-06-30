
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="bg-secondary text-white px-4 py-2 rounded"
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
