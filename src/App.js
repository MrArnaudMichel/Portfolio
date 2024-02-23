import './App.css';
import {withTranslation} from 'react-i18next';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavigationBar from './components/mainPage/NavigationBar';
import Home from './components/mainPage/Home';
import Project from './components/mainPage/Project';
import Languages from './components/mainPage/Languages';
import Career from "./components/mainPage/Career";

import AllProjects from "./components/projects/AllProjects";
import ProjectPage from './components/projects/ProjectPage';
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
								<Career t={t}/>
								<Project t={t}/>
								<Languages t={t}/>
							</>
						}/>
						<Route path="/AllProjects" element={<AllProjects t={t}/>}/>
						<Route path="/Projects/:projectName" element={<ProjectPage projects={projects}/>}/>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default withTranslation()(App);