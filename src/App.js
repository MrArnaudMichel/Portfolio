import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Project from './components/Project';
import Languages from './components/Languages';
import {withTranslation} from "react-i18next";

function App({t}) {
    return (
        <>
            <Router>
                <div className={"header"}>
                    <NavigationBar t={t}/>
                    <Home t={t}/>
	                <Project t={t}/>
                    <Languages/>
                </div>
            </Router>
        </>
    );
}

export default withTranslation()(App);
