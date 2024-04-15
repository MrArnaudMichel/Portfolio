import React from 'react';
import './css/Occupation.css';
import {useNavigate, useParams} from 'react-router-dom';
import occupations from "../../locales/jobs.json";

function Occupation({ t }) {
    const {occupationName} = useParams();
    const occupation = occupations.find(o => o.link === occupationName);
    const navigate = useNavigate();

    return (
        <div className="occupation-container">
            <h1>{t(occupation.title)}</h1>
            <div className="occupation-header">
                <div className="occupation-info" data-aos="fade-up">
                    {occupation.date && (
                        <div className="occupation-header-main timeline">
                            <p dangerouslySetInnerHTML={{__html: `<strong>${t("timeline")}</strong>`}}></p>
                            <p className="colorprimary" dangerouslySetInnerHTML={{__html: occupation.date}}></p>
                        </div>
                    )}
                    {occupation.company && (
                        <div className="occupation-header-main company" data-aos="fade-up">
                            <p dangerouslySetInnerHTML={{__html: `<strong>${t("company")}</strong>`}}></p>
                            <p className="colorprimary" dangerouslySetInnerHTML={{__html: t(occupation.company)}}></p>
                        </div>
                    )}
                    {occupation.location && (
                        <div className="occupation-header-main location" data-aos="fade-up">
                            <p dangerouslySetInnerHTML={{__html: `<strong>${t("location")}</strong>`}}></p>
                            <p className="colorprimary" dangerouslySetInnerHTML={{__html: t(occupation.location)}}></p>
                        </div>
                    )}
                    {occupation.role && (
                        <div className="occupation-header-main role" data-aos="fade-up">
                            <p dangerouslySetInnerHTML={{__html: `<strong>${t("role")}</strong>`}}></p>
                            <p className="colorprimary" dangerouslySetInnerHTML={{__html: t(occupation.role)}}></p>
                        </div>
                    )}
                </div>
            </div>
            <div className={"occupation-content"} data-aos="fade-up">
                <div className="occupation-description" data-aos="fade-up">
                    <p dangerouslySetInnerHTML={{__html: t(occupation.description)}}></p>
                </div>
                {occupation.projects && (
                    <div className="occupation-projects" data-aos="fade-up">
                        <h3 dangerouslySetInnerHTML={{__html: `${t("projects")}`}}></h3>
                        <ul>
                            {occupation.projects.map((project, index) => (
                                <li key={index} onClick={() => navigate(`/projects/${project}`)}>{t(project)}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {occupation.skills && (
                    <div className={"occupation-skills"} data-aos="fade-up">
                        <h3 className={"title"} dangerouslySetInnerHTML={{__html: `${t("skills")}`}}></h3>
                        <div className={"skills-tools tools"}>
                            {occupation.skills.map((tool) => {
                                return (
                                    <div className={"icons"}>
                                        <p dangerouslySetInnerHTML={{__html: t(tool)}}></p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
            <div className={"back-div"} data-aos="fade-up">
                <button className={"back"} onClick={() => navigate(-1)}
                        dangerouslySetInnerHTML={{__html: t("back")}}></button>
            </div>
        </div>
    );
}

export default Occupation;