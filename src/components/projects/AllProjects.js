import React, {useEffect} from "react";
import './css/AllProjects.css';
import ProjectItemShort from "./ProjectItemShorts";
import jsonProjects from "../../locales/projects.json";
import AOS from "aos";

function AllProjects({t}) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
    }, []);


    return (
        <div id={"Projects"} onLoad={() => {
            window.location.href = "#Projects";
        }}>
            <section className={"all-projects"} id={"AllProjects"} data-aos="fade-up">
                <h1>{t('AllProjects')}</h1>
                <div className={"all-projects-container"}>
                    {jsonProjects.map((project, index) =>
                        <ProjectItemShort key={index} t={t} project={project} className={`project-item-main item`}/>
                    )}
                </div>
            </section>
        </div>
    )
}

export default AllProjects;