import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import './css/NavigationBar.css';
import ThemeToggle from './ThemeToggle';

function NavigationBar({t, toggleTheme, currentTheme}) {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
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
                    <Link to="/" className={`navbar-brand ${location.pathname === "/" ? "active" : ""}`}>
                        {t('NavHome')}
                    </Link>
                </li>
                <li>
                    <Link to="/career" className={`navbar-brand ${location.pathname.startsWith("/career") ? "active" : ""}`}>
                        {t('NavCareer')}
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className={`navbar-brand ${location.pathname.startsWith("/projects") ? "active" : ""}`}>
                        {t('NavProjects')}
                    </Link>
                </li>
                <li>
                    <Link to="/interests" className={`navbar-brand ${location.pathname.startsWith("/interests") ? "active" : ""}`}>
                        {t('NavInterests')}
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className={`navbar-brand ${location.pathname.startsWith("/contact") ? "active" : ""}`}>
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