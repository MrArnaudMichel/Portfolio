import React from 'react';
import { Link } from 'react-router-dom';
import "../i18n";
import { FaGithub, FaGitlab, FaLinkedin, FaFilePdf, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { GoLaw } from "react-icons/go";
import {CiMail, CiPhone, CiMap, CiUser} from "react-icons/ci";
import './mainPage/css/Footer.css';
import i18n from "../i18n";

function Footer({ t }) {
    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };
    return (
        <footer>
            <div className={"list"}>
                <div className={"footer-section MadeByMe"}>
                    <h3>{t('MadeByMeTitle')}</h3>
                    <p className={"TextMadeByMe"}>{t('MadeByMe')}</p>
                    <p><a href="https://github.com/MrArnaudMichel/Portfolio" target="_blank"
                          rel="noopener noreferrer"><FaGithub/><strong>{t('SourceCode')}</strong></a></p>
                </div>
                <div className={"footer-section"}>
                    <h3>{t('Links')}</h3>
                    <ul>
                        <li><a href="https://github.com/MrArnaudMichel" target="_blank"
                               rel="noopener noreferrer"><FaGithub/> GitHub</a></li>
                        <li><a href="https://gitlab.com/MrArnaudMichel" target="_blank"
                               rel="noopener noreferrer"><FaGitlab/> GitLab</a></li>
                        <li><a href="https://linkedin.com/in/MrArnaudMichel" target="_blank"
                               rel="noopener noreferrer"><FaLinkedin/> LinkedIn</a></li>
                        <li><a href="/cv.pdf" target="_blank" rel="noopener noreferrer"><CiUser/> Curriculum Vitae</a>
                        </li>
                    </ul>
                </div>
                <div className={"footer-section"}>
                    <h3>{t('Contact')}</h3>
                    <ul>
                        <li><Link to={"/Contact"}><FaEnvelope/> {t('Form')}</Link></li>
                        <li><a href="mailto:example@example.com"><CiMail/> {t('Email')}</a></li>
                        <li><a href="tel:+1234567890"><CiPhone/> {t('Phone')}</a></li>
                        <li><a href="https://goo.gl/maps/example"><CiMap/> {t('Address')}</a></li>
                    </ul>
                </div>
                <div className={"footer-section"}>
                    <h3>{t('Language')}</h3>
                    <select onChange={changeLanguage} className={"OptionValue"}>
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                    </select>
                </div>
            </div>
            <div className={"copyright"}>
                <p>© {new Date().getFullYear()} Arnaud Michel <span className={"dot"}>•</span> <a
                    href={"https://github.com/MrArnaudMichel/Portfolio/blob/main/LICENSE"}>{t('AllRightsReserved')}</a> <GoLaw/></p>
            </div>
        </footer>
    );
}

export default Footer;