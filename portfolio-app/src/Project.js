import React from "react";

const Project = ({title, desc, github_link}) => {
    return (
        <div className="card">
            <div className="row">
                <div className="col-md-12 aos-init aos-animate" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body ps-5 mt-3">
                        <div className="h5"><strong>{title}</strong></div>
                        <p> {desc}</p>
                        <p><a href={github_link} target="_blank" rel="noreferrer">Github Repository Link</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;