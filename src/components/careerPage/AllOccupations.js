import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import jobsData from '../../locales/jobs.json';
import AOS from "aos";
import "aos/dist/aos.css";
import './css/AllOccupations.css';

function AllOccupations({ t }) {
    const jobItemsRef = useRef([]);

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
    }, []);

    // Trier les occupations par ordre décroissant de date
    const sortedJobsData = [...jobsData].sort((a, b) => new Date(b.date.split(' - ')[0]) - new Date(a.date.split(' - ')[0]));

    return (
        <div data-aos="fade-up">
            <h1>{t('AllOccupations')}</h1>
            {sortedJobsData.map((job, index) => (
                <Link to={`/Career/${job.link}`}>
                    <div key={index} ref={el => jobItemsRef.current[index] = el} className="career-job-item" data-aos="fade-up">
                        <div className="career-job-header">
                            <h4>{t(job.title)}</h4>
                            <p className="career-date">{job.date}</p>
                        </div>
                        <div className="career-job-shortdescription">
                            <p>{t(job.shortdescription)}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default AllOccupations;