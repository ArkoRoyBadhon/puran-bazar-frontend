import React, { createContext, useState } from 'react';

export const otherContext = createContext();

const FeatureContext = ({children}) => {
    const [iconValue, setIconValue] = useState("Moon")
    const [theme, setTheme] = useState("dark")



    const handleClick = (event) => {
        if (iconValue === 'Moon') {
            setIconValue("Sun")
            setTheme("light")
        } else {
            setIconValue('Moon')
            setTheme("dark")
        }
        // console.log(event.target.parentElement.parentElement.getAttribute('data-theme'));
        console.log(event.target.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute('data-theme'));

    }

    const otherInfo = {
        handleClick,
        theme,

    }

    return (
        <otherContext.Provider value={otherInfo}>
            {children}
        </otherContext.Provider>
    );
};

export default FeatureContext;