'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon, FaLaptop } from 'react-icons/fa';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by rendering only after mount
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === 'system' ? systemTheme : theme;

  return (
    <div className="flex items-center gap-1">
      <button
        aria-label="Use light theme"
        onClick={() => setTheme('light')}
        className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        title="Light"
      >
        <FaSun className={current === 'light' ? 'opacity-100' : 'opacity-60'} />
      </button>

      <button
        aria-label="Use dark theme"
        onClick={() => setTheme('dark')}
        className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        title="Dark"
      >
        <FaMoon className={current === 'dark' ? 'opacity-100' : 'opacity-60'} />
      </button>

      <button
        aria-label="Use system theme"
        onClick={() => setTheme('system')}
        className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        title="System"
      >
        <FaLaptop className={theme === 'system' ? 'opacity-100' : 'opacity-60'} />
      </button>
    </div>
  );
}
