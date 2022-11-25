import React, { createContext, useEffect, useState } from 'react';

export const otherContext = createContext();

const FeatureContext = ({ children }) => {
    const [iconValue, setIconValue] = useState("Moon")
    const [theme, setTheme] = useState("dark")


    const handleClick = (event) => {
        if (iconValue === 'Moon') {
            setIconValue("Sun")
            localStorage.setItem('theme', 'light');
            
        } else {
            setIconValue('Moon')
            localStorage.setItem('theme', 'dark');
            
        }
        

    }

    const otherInfo = {
        handleClick,
        theme,

    }

    useEffect(() => {
        setTheme(localStorage.getItem('theme'))
        // const status = localStorage.getItem('theme')
        // if(status === "light") {

        // }
    }, [iconValue])

    return (
        <otherContext.Provider value={otherInfo}>
            {children}
        </otherContext.Provider>
    );
};

export default FeatureContext;