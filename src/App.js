import React, { useState } from 'react';
import './App.css';
import { withTranslation } from 'react-i18next';
import GlobalStyle from './components/layoutComponents/GlobalStyle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/layoutComponents/NavigationBar';
import Home from './components/mainPage/Home';
import Project from './components/mainPage/Project';
import Skills from './components/mainPage/Skills';
import Career from "./components/mainPage/Career";
import AllProjects from "./components/projectsPage/AllProjects";
import ProjectPage from './components/projectsPage/ProjectPage';
import AllOccupations from "./components/careerPage/AllOccupations";
import Occupation from "./components/careerPage/Occupation";
import Footer from "./components/layoutComponents/Footer";
import ScrollToTop from './ScrollToTop';

function App({ t }) {
	const [theme, setTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<div className={`App ${theme}`}>
			<GlobalStyle theme={theme} />
			<Router>
				<ScrollToTop />
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

						<Route path="/Projects" element={<AllProjects t={t} />} />
						<Route path="/Projects/:projectName" element={<ProjectPage t={t}/>} />

						<Route path="/Career" element={<AllOccupations t={t} />} />
						<Route path="/Career/:occupationName" element={<Occupation t={t} />} />

					</Routes>
				</div>
				<div className={"footer"}>
					<Footer t={t} />
				</div>
				<ScrollToTop />
			</Router>
		</div>
	);
}

export default withTranslation()(App);