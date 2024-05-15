import React from "react";
import './css/Project.css';
import ProjectItem from "./ProjectItem";
import jsonProjects from "../../locales/projects.json";
import AOS from "aos";
import {Link} from "react-router-dom";

function Project({t}) {
    React.useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
    }, []);
    return (
        <section className={"projects"} id={"Projects"} data-aos="fade-up">
            <h1>{t('Projects')}</h1>
            <div className={"projects-container"}>
                {jsonProjects.slice(0, 5).map((project, index) =>
                    <ProjectItem key={index} t={t} project={project} className={index >= 2 ? 'large' : ''}/>
                )}
            </div>
            <Link to={"/projects"} className={"buttonAllProjects"}><strong>{t('AllProjects')}</strong></Link>
        </section>
    )
}

export default Project;