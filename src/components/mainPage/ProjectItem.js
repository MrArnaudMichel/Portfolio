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
            <ImagesSlider images={project.images}/>
            <h3 data-aos="fade-up">{t(project.title)}</h3>
            <p className={"date"}><strong>{project.date}</strong></p>
            <p dangerouslySetInnerHTML={{__html: t(project.description)}}></p>
            <div className={"languages"}>
                {project.languages && project.languages.map((language) => {
                    const languageData = findLanguageData(language);
                    return (
                        <div key={language} className={"icons"}>
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
                        <div key={tool} className={"icons"}>
                            <a href={tool.link}>
                                <p>{t(tool)}</p>
                            </a>
                        </div>
                    );
                })}
            </div>
            <p className="button"><strong>{t('GoToProject')}</strong></p>
        </Link>
    )
}

export default ProjectItem;