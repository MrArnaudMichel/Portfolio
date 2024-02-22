import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProjectPage({ projects }) {
	const { projectName } = useParams();
	const project = projects.find(p => p.title === projectName);
	const navigate = useNavigate();

	return (
		<div>
			<h1>{project.title}</h1>
			<p>{project.description}</p>
			<button onClick={() => navigate(-1)}>Retour</button>
		</div>
	);
}

export default ProjectPage;