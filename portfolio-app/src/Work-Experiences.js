import React from "react";
import WorkExperience from "./Work-Experience"
import SectionHeading from "./SectionHeading"
import "./css/experience.css"

let work_experiences = require('./json/work-exp-info.json');

const WorkExperiences = () => {
    return (
        <div className="section" id="experience">
            <div className="container cc-experience">
                <SectionHeading headingCss="h4 text-center mb-4 title" headingText="Work Experience"/>
                <>
                    {work_experiences.map((work_ex, index) => ( <WorkExperience key={index} duration={work_ex.duration} companyName={work_ex.company_name} designation={work_ex.designation} details={work_ex.details}/>))}
                </>
            </div>
        </div>
    )
}

export default WorkExperiences;