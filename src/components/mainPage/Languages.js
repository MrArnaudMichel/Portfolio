import React from 'react';
import languages from '../../locales/languages.json';

function Language() {

	return (
		<div>
			{languages.map((language, index) => (
				<div key={index}>
					<h2>{language.name}</h2>
					<a href={language.link}>Learn More</a>
					<img src={language.image} alt={language.name} style={{width: '50vw', height: '50vh', objectFit: 'cover'}}/>
				</div>
			))}
		</div>
	);
}

export default Language;