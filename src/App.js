import React, { useState } from 'react';
import './App.css';
import { withTranslation } from 'react-i18next';
import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/mainPage/Home';
import Project from './components/mainPage/Project';
import Skills from './components/mainPage/Skills';
import Career from "./components/mainPage/Career";
import AllProjects from "./components/projects/AllProjects";
import ProjectPage from './components/projects/ProjectPage';
import Footer from "./components/Footer";


import projects from './locales/projects.json';

function App({ t }) {
	const [theme, setTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<div className={`App ${theme}`}>
			<GlobalStyle theme={theme} />
			<Router>
				<div className={"header"}>
					<NavigationBar t={t} toggleTheme={toggleTheme} currentTheme={theme} />
				</div>
				<div className={"body"}>
					<Routes>
						<Route path="/" element={
							<>
								<Home t={t} />
								<Career t={t} />
								<Project t={t} />
								<Skills t={t} />
							</>
						} />
						<Route path="/AllProjects" element={<AllProjects t={t} />} />
						<Route path="/Projects/:projectName" element={<ProjectPage projects={projects} />} />
					</Routes>
				</div>
				<div className={"footer"}>
					<Footer t={t} />
				</div>
			</Router>
		</div>
	);
}

export default withTranslation()(App);