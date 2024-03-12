import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Contributor from './Contributor';
import ImagesSlider from "../mainPage/ImagesSlider";
import './css/ProjectPage.css';
import languagesData from "../../locales/skills.json";

function ProjectPage({t, projects}) {
    const {projectName} = useParams();
    const project = projects.find(p =>
        p.title === projectName
    );
    const navigate = useNavigate();
    const findLanguageData = (language) => {
        return languagesData.languages.find(lang => lang.name === language) ||
            languagesData.web_development.find(lang => lang.name === language) ||
            languagesData.tools_and_frameworks.find(lang => lang.name === language);
    }

    return (
        <div className="project-page">
            <h1>{project.title}</h1>
            <div className="project-header">
                <div className={"project-info"}>
                    <div className={"timeline"}>
                        <p>{t("timeline")}</p>
                        <p className={"colorprimary"}>
                            {project.date}
                        </p>
                    </div>
                    <div className={"contributors"}>
                        <p>{t("contributors")}</p>
                        <div className={"contributorsimg"}>
                            {project.team.map((contributor, index) => <Contributor key={index}
                                                                                   contributor={contributor}/>)}
                        </div>
                    </div>
                    <div className={"role"}>
                        <p>{t("role")}</p>
                        <p className={"colorprimary"}>
                            {project.role}
                        </p>
                    </div>
                    <div className="project-gitpath">
                        <p>{t("gitpath")}</p>
                        <a href={project.gitpath} target="_blank" rel="noopener noreferrer">
                            <p  className={"colorprimary"}>{t("link")}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className={"content-project"}>
                <div className="project-description">
                    {project.description.map((desc, index) =>
                        <div className={"description"} key={index}>
                        <h3 key={index}>{t(project.titledescription[index])}</h3>
                            <p key={index}>{t(desc)}</p>
                        </div>
                    )}
                </div>
                <div className="project-images">
                    <div className={"images"}>
                        <h2>{t("images")}</h2>
                        <ImagesSlider images={project.images}/>
                    </div>
                </div>
                <div className="project-video">
                    <h2>{t("video")}</h2>
                    <iframe className={"video"} src={project.video} title="Project Video" allowFullScreen></iframe>
                </div>
                <div className="project-skills">
                    <h2>
                        {t("NavSkills")}
                    </h2>
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
                                    <p>{t(tool)}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={"back"}>
                <button onClick={() => navigate(-1)}>{t("back")}</button>
            </div>
        </div>
    );
}

export default ProjectPage;