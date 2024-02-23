import React, {useEffect, useRef, useState} from "react";
import "./css/Career.css";
import AOS from "aos";
import "aos/dist/aos.css";
import jobs from "../../locales/jobs.json";
import images from "../../locales/images.json"; // Import images

function Career({t}) {
	const [jobPositions, setJobPositions] = useState([]);
	const jobItemsRef = useRef([]);

	useEffect(() => {
		AOS.init({
			duration: 2000,
			once: true
		});
	}, []);

	useEffect(() => {
		jobItemsRef.current = jobItemsRef.current.slice(0, jobs.length);
	}, []);

	useEffect(() => {
		jobItemsRef.current.forEach((item, index) => {
			// if index > 0 and width > 768px
			if (index > 0 && window.innerWidth > 768) {
				if (index === 1) {
					item.style.marginTop = "-300px";
				}else {
					item.style.marginTop = "-250px";
				}
			}
		});
	}, [jobPositions]);

	return (
		<section className={"career"} id={"Career"}>
			<h1>{t("Career")}</h1>
			<div className={"career-container"}>
				{jobs.map((job, index) => (
					<div
						key={index}
						className={"job-item"}
						id={`job-${index}`}
						ref={el => jobItemsRef.current[index] = el}
						data-aos="fade-up"
					>
						<h2>{t(job.title)}</h2>
						<p className={"date"}>{job.date}</p>
						<p>{t(job.description)}</p>
						<div className={"image-container"}>
							<img src={images.find((image) => image.id === job.image).image} alt={job.title}/>
							<div
								className={"image-title"}>{t(images.find((image) => image.id === job.image).title)}</div>
						</div>
						<div className={"skills"}>
							{job.skills &&
								job.skills.map((skill, skillIndex) => (
									<div className={"icons"}>
										<p key={skillIndex}>{t(skill)}</p>
									</div>
								))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Career;