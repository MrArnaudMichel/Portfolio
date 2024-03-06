import React from 'react';
import { Link } from 'react-router-dom';
import './mainPage/css/Footer.css';

function Footer({ t }) {
    return (
        <footer>
            <div>
                <h3>{t('Social')}</h3>
                <ul>
                    <li><a href="https://github.com/MrArnaudMichel" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://gitlab.com/MrArnaudMichel" target="_blank" rel="noopener noreferrer">GitLab</a></li>
                    <li><a href="https://linkedin.com/in/MrArnaudMichel" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="/cv.pdf" target="_blank" rel="noopener noreferrer">Curriculum Vitae</a></li>
                    <li><Link to="/projects">{t('Projects')}</Link></li>
                </ul>
            </div>
            <div>
                <h3>{t('Contact')}</h3>
                <ul>
                    <li><Link to={"/contact"}>{t('Contact')}</Link></li>
                </ul>
            </div>
            <div>
                <h3>{t('Legal')}</h3>
                <p>© {new Date().getFullYear()} Arnaud Michel.</p>
                <p>{t('All rights reserved')}</p>
            </div>
        </footer>
    );
}

export default Footer;