import React from "react";
import "./css/education.css"

const Education = ({duration, degreeName, degreeTitle, universityName, details}) => {
    return (
        <div className="card">
            <div className="row">
                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body cc-education-header">
                    <p>{duration}</p>
                    <div className="h5">{degreeName}</div>
                </div>
                </div>
                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body">
                    <div className="h5">{degreeTitle}</div>
                    <p className="category">{universityName}</p>
                    <p> {details} </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Education;