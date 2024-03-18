// ProjectItemShort.js
import React from "react";
import './css/ProjectItemShort.css';
import AOS from "aos";
import {Link} from 'react-router-dom';

function ProjectItemShort({t, project, className}) {
    React.useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
    }, []);

    return (
        <Link to={`/Projects/${project.link}`}
              className={`project-item-short ${className} ${!project.logo ? 'double-grid-row' : ''}`}
              data-aos="fade-up">
            <h5>{t(project.title)}</h5>
            <p>{t(project.shortDescription)}</p>
            {project.logo ? <img src={project.logo} alt={project.title} className="logo"/> :
                <img src={project.images[0]} alt={project.title} className="image large"/>}
        </Link>
    )
}

export default ProjectItemShort;