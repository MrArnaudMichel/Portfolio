import React from 'react';
import skillsData from '../../locales/skills.json';
import './css/Skills.css';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Skills({t}) {
    const renderSkill = (skill) => (
        <div className="skill-card" key={skill.name}>
            <img src={skill.image} alt={skill.name}/>
            <h4>{skill.name}</h4>
            <div className="progress-bar">
                <div className="progress" style={{width: `${skill.level * 10}%`}}></div>
            </div>
            <a href={skill.link} target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
    );

    return (
        <div className="skills">
            <h1>{t('Skills')}</h1>
            <div className="skills-container">
                <Tabs>
                    <div className="tabs-header">
                        <TabList>
                            <Tab className={"tab"}>{t('All')}</Tab>
                            <Tab className={"tab"}>{t('Languages')}</Tab>
                            <Tab className={"tab"}>{t('WebDevelopment')}</Tab>
                            <Tab className={"tab"}>{t('ToolsAndFramework')}</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <div className="skills-grid">
                            {skillsData.languages.map(renderSkill)}
                            {skillsData.web_development.map(renderSkill)}
                            {skillsData.tools_and_frameworks.map(renderSkill)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="skills-grid">
                            {skillsData.languages.map(renderSkill)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="skills-grid">
                            {skillsData.web_development.map(renderSkill)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="skills-grid">
                            {skillsData.tools_and_frameworks.map(renderSkill)}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}

export default Skills;