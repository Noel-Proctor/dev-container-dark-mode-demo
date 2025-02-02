import { useEffect, useState } from "react";


function DarkModeToggle() {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode])

    return (
        <button className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 rounded-md dark:text-white" onClick={() => setIsDarkMode(!isDarkMode)}>
            Dark Mode
        </button>
    )


}

export default DarkModeToggle;