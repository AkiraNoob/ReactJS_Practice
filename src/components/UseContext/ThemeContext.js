import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

function Provider({ children })
{
    const [ theme, setTheme ] = useState('light');

    const handleChangeTheme = () =>
    {
        (theme === 'dark') ? setTheme('light') : setTheme('dark');
    }

    const value = {
        theme,
        handleChangeTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, Provider }