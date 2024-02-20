import React from "react";
import './css/Project.css';
import {ProjectItem} from "./ProjectItem";
import jsonProjects from "../locales/projects.json";

function Project({t}){ // Assurez-vous que les props t et projects sont passées à ce composant
	return (
		<div className={"projects"} id={"Projects"}>
			<h1>{t('Projects')}</h1>
			<div className={"projects-container"}>
				{jsonProjects.map((project, index) =>
					<ProjectItem key={index} t={t} project={project} className={index < 2 ? 'large' : ''}/>
				)}
			</div>
		</div>
	)
}

export default Project;