import React from "react";
import './css/ProjectItem.css';
import languages from "../locales/languages.json";
import ImagesSlider from "./ImagesSlider";
import AOS from "aos";

function ProjectItem({ t, project, className }) {
	React.useEffect(() => {
		AOS.init({
			duration: 2000,
			once: true
		});
	}, []);

	return (
		<div className={`project-item ${className}`} data-aos="fade-up">
			<ImagesSlider images={project.images}/>
			<h3><a href={project.gitpath}>{t(project.title)}</a></h3>
			<p className={"date"}>{project.date}</p>
			<p>{t(project.description)}</p>
			{/* Check if project.languages exists before accessing it */}
			{/*<h4 className={"title language"}>{t("Languages")}</h4>*/}
			<div className={"languages"}>
				{project.languages && project.languages.map((language) => {
					const languageData = languages.find(lang => lang.name === language);
					return (
						<div key={language} className={"icons"}>
							<a href={languageData.link}>
								{/*<img src={languageData.image} alt={language}/>*/}
								<p>{t(languageData.name)}</p>
							</a>
						</div>
					);
				})}
			</div>
		</div>
	)
}

export default ProjectItem;
