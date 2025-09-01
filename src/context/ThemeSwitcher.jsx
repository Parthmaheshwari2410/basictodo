import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

export function ThemeSwitcher() {
    const { theme, toggleTheme, isDark } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`
                fixed top-6 right-6 p-3 rounded-full transition-all duration-300 
                transform hover:scale-110 hover:-translate-y-1 shadow-lg
                ${isDark
                    ? 'bg-white text-black hover:bg-white'
                    : 'bg-black text-white hover:bg-gray-700'
                }
            `}
        >
            <div className="text-2xl">
                {isDark ? 'light mode' : 'dark mode'}
            </div>
        </button>
    );
}