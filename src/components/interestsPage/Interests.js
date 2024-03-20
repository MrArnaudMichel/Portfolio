import React from "react";
import './css/Interests.css';
import {Link} from "react-router-dom";
import AOS from "aos";
import interests from "../../locales/interests.json";

function Interests({t}) {
    React.useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
    }, []);

    return (
        <section className={"interests"} id={"Interests"} data-aos="fade-up">
            <h1>{t('Interests')}</h1>
            <div className={"interests-container"}>
                {interests.map((interest, index) =>
                    <div key={index} className={"interest"} data-aos="fade-up">
                        <h3>{t(interest.title)}</h3>
                        <p dangerouslySetInnerHTML={{__html: t(interest.description)}}></p>
                    </div>
                )}
            </div>
        </section>
    )
}


export default Interests;