import { useState, useEffect } from 'react';

/**
 * Custom hook for managing dark mode
 * Persists preference to localStorage and respects system preference
 */
export const useDarkMode = () => {
    const [isDark, setIsDark] = useState(() => {
        // Check localStorage first
        const saved = localStorage.getItem('darkMode');
        if (saved !== null) {
            return saved === 'true';
        }

        // Fall back to system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        // Update document attribute
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');

        // Update background color to prevent flash
        document.documentElement.style.backgroundColor = isDark ? '#0f172a' : '#ffffff';
        document.body.style.backgroundColor = isDark ? '#0f172a' : '#ffffff';

        // Persist to localStorage
        localStorage.setItem('darkMode', isDark.toString());
    }, [isDark]);

    const toggle = () => setIsDark(prev => !prev);

    return [isDark, toggle];
};
