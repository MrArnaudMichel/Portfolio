import React from "react";
import './css/Interests.css';
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
                        <div className={"overlay"}>
                            <div className={"interest-header"}>
                                <h3>{t(interest.name)}</h3>
                                <p><strong>{t(interest.category)}</strong></p>
                                <p>{t(interest.date)}</p>
                            </div>
                            <img src={interest.logo} alt={interest.name}/>
                        </div>
                        <p dangerouslySetInnerHTML={{__html: t(interest.description)}}></p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Interests;