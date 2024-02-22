import React from "react";
import './css/ProjectItem.css';
import languages from "../../locales/languages.json";
import ImagesSlider from "./ImagesSlider";
import AOS from "aos";
import { Link } from 'react-router-dom'; // Importation du composant Link

function ProjectItem({ t, project, className }) {
	React.useEffect(() => {
		AOS.init({
			duration: 2000,
			once: true
		});
	}, []);

	return (
		<Link to={`/Projects/${project.title}`} className={`project-item ${className}`} data-aos="fade-up">
			<ImagesSlider images={project.images}/>
			<h3>{t(project.title)}</h3>
			<p className={"date"}>{project.date}</p>
			<p>{t(project.description)}</p>
			<div className={"languages"}>
				{project.languages && project.languages.map((language) => {
					const languageData = languages.find(lang => lang.name === language);
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
			<p className="button"><strong>{t('GoToProject')}</strong></p>
		</Link>
	)
}

export default ProjectItem;
