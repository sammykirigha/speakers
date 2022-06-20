import React, { useContext } from "react";
import { ThemeContext }  from "../contexts/ThemeContext";
import Header from "./Header";
import Speakers from "./Speakers";

const Layout = () => {
    const { theme, themeToggle } = useContext(ThemeContext)
    return (
        <div className={`${theme === 'light' ? 'dark:bg-slate-800' : 'bg-white'} pt-5`}>
            <Header />
            <Speakers />
        </div>
    );
};

export default Layout;
