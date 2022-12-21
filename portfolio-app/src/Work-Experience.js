import React from "react";

const WorkExperience = ({idxKey, duration, companyName, designation, details}) => {
    return (
        <div key={idxKey} className="card">
            <div className="row">
                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body cc-experience-header">
                    <p>{duration}</p>
                    <div className="h5">{companyName}</div>
                </div>
                </div>
                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body">
                    <div className="h5">{designation}</div>
                    <>
                        <ul>
                            {details.map((detail, index) => (<li key={index}><p>{detail}</p></li>))}
                        </ul>
                    </>
                </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience;