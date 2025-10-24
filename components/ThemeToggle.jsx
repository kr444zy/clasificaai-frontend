'use client';
import { useState } from 'react';
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  return (
    <button
      onClick={() => {
        setDark(!dark);
        document.documentElement.classList.toggle('dark');
      }}
      className="fixed bottom-5 right-5 p-2 border rounded-full bg-gray-100 dark:bg-gray-700"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}