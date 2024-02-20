import React from "react";
import './css/Project.css';
import ProjectItem from "./ProjectItem";
import jsonProjects from "../locales/projects.json";
import AOS from "aos";

function Project({t}){
	React.useEffect(() => {
		AOS.init({
			duration : 2000,
			once: true
		});
	}, []);
	return (
		<div className={"projects"} id={"Projects"} data-aos="fade-up">
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