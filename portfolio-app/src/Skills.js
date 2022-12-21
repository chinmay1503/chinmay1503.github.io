import React from "react";
import SectionHeading from "./SectionHeading";

const Skills = () => {
    return (
        <div className="section" id="skill">
            <div className="container">
                <SectionHeading headingCss="h4 text-center mb-4 title" headingText="Technological Stack"/>
                    <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div>
                            <div className="card-body">
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Languages Known:</strong></div>
                                    <div className="col-sm-8">Java, Python, SQL, NoSQL, PowerShell</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Databases:</strong></div>
                                    <div className="col-sm-8">Oracle, MySQL, Postgres, MongoDB, SQLite</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Web Technologies:</strong></div>
                                    <div className="col-md-6">JavaScript, TypeScript, HTML5, CSS3, XML, JSON, REST (Restful), SOAP</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Frameworks:</strong></div>
                                    <div className="col-sm-8">Maven, Spring Boot, Node.js, Express, React, Angular 13, ReactiveJS (RxJS), JUnit, xUnit, Jasmine</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Version COntrol Tools:</strong></div>
                                    <div className="col-sm-8">SVN, Git, GitLab, GitHub, BitBucket</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Cloud:</strong></div>
                                    <div className="col-sm-8">GCP (Compute Engine, Datastore, App Engine), AWS (EC2, RDS, Lambda, CloudWatch)</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">DevOps:</strong></div>
                                    <div className="col-sm-8">Docker, Kubernetes</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Operating Systems:</strong></div>
                                    <div className="col-sm-8">Linux, Windows, Mac</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Skills;