import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Contributor from './Contributor';
import ImagesSlider from "../mainPage/ImagesSlider";
import './css/ProjectPage.css';
import languagesData from "../../locales/skills.json";
import AOS from "aos";

function ProjectPage({t, projects}) {
    const {projectName} = useParams();
    const project = projects.find(p =>
        p.link === projectName
    );
    const navigate = useNavigate();
    const findLanguageData = (language) => {
        const foundLanguage = languagesData.languages.find(lang => lang.name === language) ||
            languagesData.web_development.find(lang => lang.name === language) ||
            languagesData.tools_and_frameworks.find(lang => lang.name === language);
        return foundLanguage ? foundLanguage : null;
    }

    React.useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
    }, []);

    return (
        <div className="project-page">
            {project.title && <h1 dangerouslySetInnerHTML={{__html: t(project.title)}}></h1>}
            <div className="project-header">
                <div className={"project-info"} data-aos="fade-up">
                    {project.date && (
                        <div className={"project-header-main timeline"}>
                            <p dangerouslySetInnerHTML={{__html: `<strong>${t("timeline")}</strong>`}}></p>
<p className={"colorprimary"} dangerouslySetInnerHTML={{__html: project.date}}></p>
</div>
)}
{project.team && (
    <div className={"project-header-main contributors"} data-aos="fade-up">
        <p dangerouslySetInnerHTML={{__html: `<strong>${t("contributors")}</strong>`}}></p>
        <div className={"contributorsimg"}>
            {project.team.map((contributor, index) => <Contributor key={index}
                                                                   contributor={contributor}/>)}
        </div>
    </div>
)}
{project.role && (
    <div className={"project-header-main role"} data-aos="fade-up">
        <p dangerouslySetInnerHTML={{__html: `<strong>${t("role")}</strong>`}}></p>
        <p className={"colorprimary"} dangerouslySetInnerHTML={{__html: project.role}}></p>
    </div>
)}
{project.gitpath && (
    <div className="project-header-main project-gitpath" data-aos="fade-up">
        <p dangerouslySetInnerHTML={{__html: `<strong>${t("gitpath")}</strong>`}}></p>
        <a href={project.gitpath} target="_blank" rel="noopener noreferrer">
            <p className={"colorprimary project-header-contains-link"} dangerouslySetInnerHTML={{__html: project.gitpath.split("/")[project.gitpath.split("/").length - 1]}}></p>
        </a>
    </div>
)}
{
    project.website && (
        <div className="project-header-main project-website" data-aos="fade-up">
            <p dangerouslySetInnerHTML={{__html: `<strong>${t("website")}</strong>`}}></p>
            <a href={project.website} target="_blank" rel="noopener noreferrer">
                <p className={"colorprimary project-header-contains-link"} dangerouslySetInnerHTML={{__html: project.website.split("//")[1]}}></p>
            </a>
        </div>
    )
}
</div>
</div>
<div className={"content-project"}>
    {project.description && (
        <div className="project-description" data-aos="fade-up">
            {project.description.map((desc, index) =>
                <div className={"description"} key={index}>
                    <h3 dangerouslySetInnerHTML={{__html: t(project.titledescription[index])}}></h3>
                    <p data-aos="fade-up" dangerouslySetInnerHTML={{__html: t(desc)}}></p>
                </div>
            )}
        </div>
    )}
    {project.images && (
        <div className="project-images" data-aos="fade-up">
            <div className={"images"}>
                <h2 dangerouslySetInnerHTML={{__html: t("images")}}></h2>
                <ImagesSlider images={project.images}/>
            </div>
        </div>
    )}
    {project.video && (
        <div className="project-video" data-aos="fade-up">
            <h2 dangerouslySetInnerHTML={{__html: t("video")}}></h2>
            <iframe className={"video"} src={project.video} title="Project Video" allowFullScreen></iframe>
        </div>
    )}
    <div className="project-skills">
        <h2 dangerouslySetInnerHTML={{__html: t("NavSkills")}}></h2>
        {project.languages && (
            <div className={"languages"} data-aos="fade-up">
                {project.languages.map((language) => {
                    const languageData = findLanguageData(language);
                    return (
                        languageData && (
                            <div key={language} className={"icons"}>
                                <a href={languageData.link}>
                                    <p dangerouslySetInnerHTML={{__html: t(languageData.name)}}></p>
                                </a>
                            </div>
                        )
                    );
                })}
            </div>
        )}
        {project.tools && (
            <div className={"tools"} data-aos="fade-up">
                {project.tools.map((tool) => {
                    return (
                        <div key={tool} className={"icons"}>
                            <p dangerouslySetInnerHTML={{__html: t(tool)}}></p>
                        </div>
                    );
                })}
            </div>
        )}
    </div>
</div>
<div className={"back"} data-aos="fade-up">
    <button onClick={() => navigate(-1)} dangerouslySetInnerHTML={{__html: t("back")}}></button>
</div>
</div>
);
}

export default ProjectPage;