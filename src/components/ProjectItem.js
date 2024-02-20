import React from "react";
import './css/ProjectItem.css';
import {ImagesSlider} from "./ImagesSlider";

function ProjectItem({t, project, className}){
	return (
		<div className={`project-item ${className}`}>
			<ImagesSlider images={project.images}/>
			<h3>{t(project.title)}</h3>
			<p>{t(project.description)}</p>
		</div>
	)
}

export {ProjectItem};