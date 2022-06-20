import React, { useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState("dark");

    const themeToggle = (event) => {
        setTheme(event.target.value);
    };

    return [theme, setTheme, themeToggle];
};

export default useTheme;
