import React from "react";
import './css/ProjectItem.css';
import languagesData from "../../locales/skills.json";
import ImagesSlider from "./ImagesSlider";
import AOS from "aos";
import {Link} from 'react-router-dom';

function ProjectItem({t, project, className}) {
    React.useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
    }, []);

    const findLanguageData = (language) => {
        return languagesData.languages.find(lang => lang.name === language) ||
            languagesData.web_development.find(lang => lang.name === language) ||
            languagesData.tools_and_frameworks.find(lang => lang.name === language);
    }

    return (
        <Link to={`/Projects/${project.link}`} className={`project-item ${className}`} data-aos="fade-up">
            <ImagesSlider images={project.images} data-aos="fade-up"/>
            <h3 data-aos="fade-up">{t(project.title)}</h3>
            <p className={"date"} data-aos="fade-up"><strong>{project.date}</strong></p>
            <p dangerouslySetInnerHTML={{__html: t(project.description)}} data-aos="fade-up"></p>
            <div className={"languages"} data-aos="fade-up">
                {project.languages && project.languages.map((language) => {
                    const languageData = findLanguageData(language);
                    return (
                        <div key={language} className={"icons"} data-aos="fade-up">
                            <a href={languageData.link}>
                                <p>{t(languageData.name)}</p>
                            </a>
                        </div>
                    );
                })}
            </div>
            <div className={"tools"}>
                {project.tools && project.tools.map((tool) => {
                    return (
                        <div key={tool} className={"icons"} data-aos="fade-up">
                            <a href={tool.link}>
                                <p>{t(tool)}</p>
                            </a>
                        </div>
                    );
                })}
            </div>
            <p className="button" data-aos="fade-up"><strong>{t('GoToProject')}</strong></p>
        </Link>
    )
}

export default ProjectItem;