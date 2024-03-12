import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Contributor from './Contributor';
import "./css/ProjectPage.css"

function ProjectPage({projects}) {
    const {projectName} = useParams();
    const project = projects.find(p => p.title === projectName);
    const navigate = useNavigate();

    return (
        <div className="project-page">
            <div className="project-header">
                <h1>{project.title}</h1>
                <div className={"project-info"}>
                    <div className={"timeline"}>
                        Timeline
                        <p>
                            {project.date}
                        </p>
                    </div>
                </div>
            <button onClick={() => navigate(-1)}>Retour</button>
            </div>
        </div>
    );
}

export default ProjectPage;