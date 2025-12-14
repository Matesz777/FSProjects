import { useEffect, useState } from 'react';
import style from './TTThemeToggle.module.css';

function ThemeToggleButton()
{
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);


    return(
        <>
            <button className={style.themeButton}
            onClick={() =>{
                if (theme === 'light') {
                    setTheme('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                    setTheme('light');
                    document.documentElement.setAttribute('data-theme', 'light');
                }
            }}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
            
        </>
    );
}


export default ThemeToggleButton