import React from "react"
import SectionHeading from "./SectionHeading"
import Education from "./Education"
import "./css/education.css"

let education_details = require('./json/education-info.json');

const EducationDetails = () => {
    return (
        <div className="section" id="education">
            <div className="container cc-education">
                <SectionHeading headingCss="h4 text-center mb-4 title" headingText="Education"/>
                <>
                    {education_details.map((education, index) => ( <Education key={index} duration={education.duration}
                    degreeName={education.degree_name} degreeTitle={education.degree_title} universityName={education.university_name} details={education.details}/>))}
                </>
            </div>
        </div>
    )
}

export default EducationDetails;