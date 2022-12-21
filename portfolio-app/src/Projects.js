import React from "react";
import Project from "./Project"
import SectionHeading from "./SectionHeading"


let projects_info = require('./json/projects-info.json');

const Projects = () => {
    return (
        <div className="section" id="projects">
            <div className="container">
                <div className="row">
                    <SectionHeading headingCss="h4 text-center mb-4 title" headingText="Projects"/>
                </div>
            
            <>
                {projects_info.map((proj, index) => ( <Project key={index} title={proj.title} desc={proj.desc} github_link={proj.github_link}/>))}
            </>
            </div>
        </div>
    )
}

export default Projects;