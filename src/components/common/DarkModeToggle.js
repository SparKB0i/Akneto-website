import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';
import './DarkModeToggle.css';

/**
 * Dark Mode Toggle Component
 * Switches between light and dark themes
 */
const DarkModeToggle = () => {
    const [isDark, toggleDark] = useDarkMode();

    return (
        <button
            className="dark-mode-toggle"
            onClick={toggleDark}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            <div className="icon-wrapper">
                {isDark ? (
                    <Sun className="icon sun" size={20} />
                ) : (
                    <Moon className="icon moon" size={20} />
                )}
            </div>
        </button>
    );
};

export default DarkModeToggle;
