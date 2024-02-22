import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/mainPage/NavigationBar';
import Home from './components/mainPage/Home';
import Project from './components/mainPage/Project';
import Languages from './components/mainPage/Languages';
import ProjectPage from './components/projectsPage/ProjectPage';
import {withTranslation} from "react-i18next";
import projects from './locales/projects.json';

function App({t}) {
    return (
        <>
            <Router>
                <div className={"header"}>
                    <NavigationBar t={t}/>
                </div>
                <div className={"body"}>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Home t={t}/>
                                <Project t={t}/>
                                <Languages />
                            </>
                        } />
                        <Route path="/Projects/:projectName" element={<ProjectPage projects={projects} />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default withTranslation()(App);