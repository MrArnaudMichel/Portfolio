import React from "react";
import './css/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home({t}){

    React.useEffect(() => {
        AOS.init({
            duration : 2000,
            once: true
        });
    }, []);

    return (
        <section className={"Home"} id={"Home"}>
            <h1 className={"maintitle"} data-aos="fade-up">{t('Home')}</h1>
            <p className={"subtitle"} data-aos="fade-up">{t('Welcome')}</p>
            <div className={"maininfo"}>
                <div className={"profil"}>
                    <img src={"https://via.placeholder.com/256"} alt={"Profile"} className={"profile"}/>
                    <h2 className={"name"} data-aos="fade-up">Arnaud Michel</h2>
                </div>
                <article className={"card"}>
                    <div className={"text"}>
                        <h4 className={"titlesubject"} data-aos="fade-up">{t('WelcomeAboutMeTitle')}</h4>
                        <p className={"content"} dangerouslySetInnerHTML={{__html: t('WelcomeAboutMeContent')}}></p>
                        <button onClick={() => window.location.href = "#Projects"}>{t('MyProjects')}</button>
                        <button onClick={() => window.location.href = "#Skills"}>{t('MySkills')}</button>
                    </div>
                </article>
            </div>
        </section>

    )
}

export default Home
