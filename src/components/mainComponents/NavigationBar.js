import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './css/NavigationBar.css';
import ThemeToggle from './ThemeToggle';

function NavigationBar({t, toggleTheme, currentTheme}) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 80;
            if (isScrolled !== scrolled) {
                setScrolled(!scrolled);
            }
        };

        document.addEventListener("scroll", handleScroll, {passive: true});

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);


    return (
        <nav>
            <ul className={scrolled ? "navbar scrolled" : "navbar"}>
                <li>
                    <Link to="/" className="navbar-brand">
                        {t('NavHome')}
                    </Link>
                </li>
                <li>
                    <Link to="/Career" className="navbar-brand">
                        {t('NavCareer')}
                    </Link>
                </li>
                <li>
                    <Link to="/Projects" className="navbar-brand" onClick={() => {
                        window.location.href = "#Projects";
                    }}>
                        {t('NavProjects')}
                    </Link>
                </li>
                <li>
                    <Link to="/Skills" className="navbar-brand">
                        {t('NavSkills')}
                    </Link>
                </li>
                <li>
                    <Link to="/Contact" className="navbar-brand">
                        {t('NavContact')}
                    </Link>
                </li>
                <li>
                    <ThemeToggle theme={currentTheme} toggleTheme={toggleTheme}/>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;
