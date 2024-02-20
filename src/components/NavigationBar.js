import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import './css/NavigationBar.css';

function NavigationBar({t}){
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 80; // 5rem is approximately 80px
            if (isScrolled !== scrolled) {
                setScrolled(!scrolled);
            }
        };

        document.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            // cleanup the event listener
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);


    return (
        <nav>
            <ul className={scrolled ? "navbar scrolled" : "navbar"}>
                <li>
                    <Link to={"#"} className={"navbar-brand"}>
                        {t('NavHome')}
                    </Link>
                </li>
                <li>
                    <Link to={"#Career"} className={"navbar-brand"}>
                        {t('NavCareer')}
                    </Link>
                </li>
                <li>
                    <Link to={"#Projects"} className={"navbar-brand"}>
                        {t('NavProjects')}
                    </Link>
                </li>
                <li>
                    <Link to={"#Skills"} className={"navbar-brand"}>
                        {t('NavSkills')}
                    </Link>
                </li>
                <li>
                    <Link to={"#Contact"} className={"navbar-brand"}>
                        {t('NavContact')}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar