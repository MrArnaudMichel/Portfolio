import React from "react";
import './css/Career.css';
import AOS from "aos";
import jobs from "../../locales/jobs.json";
import images from "../../locales/images.json"; // Import images

function Career({t}) {
	React.useEffect(() => {
		AOS.init({
			duration: 2000,
			once: true
		});
	}, []);

	return (
		<section className={"career"} id={"Career"} data-aos="fade-up">
			<h1>{t('Career')}</h1>
			<div className={"career-container"}>
				{jobs.map((job, index) =>
					<div key={index} className={"job-item"}>
						<h2>{t(job.title)}</h2>
						<p className={"date"}>{job.date}</p>
						<p>{t(job.description)}</p>
						<div className={"image-container"}>
							<img src={images.find(image => image.id === job.image).image} alt={job.title}/>
							<div className={"image-title"}>{t(images.find(image => image.id === job.image).title)}</div>
						</div>
						<div className={"skills"}>
							{job.skills && job.skills.map((skill) => {
								return (
									<div key={skill} className={"icons"}>
										<p>{t(skill)}</p>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default Career;