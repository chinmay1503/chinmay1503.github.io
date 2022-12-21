import React from "react";
import SectionHeading from "./SectionHeading";

const About = () => {
    return (
        <div className="section" id="about">
            <div className="container">
            <div className="card" data-aos="fade-up" data-aos-offset="10">
                <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="card-body">
                    <SectionHeading headingCss="h4 mt-0 title" headingText="About"/>
                    <p>Hello! I am Chinmay Tawde, I graduated from Portland State University with a
                        Master's Degree in Computer Science.</p>
                    <p> My cumulative GPA is 3.89 and I am looking for full time opportunities as a Full Stack Software Engineer / Frontend Software Engineer/ Backend Software Engineer / Software Engineer</p>
                    <p> I recently completed two Internships at two major corporations, both dominant in their own domains
                        (Semiconductor and Supply Chain & Logistics). The first at Intel wherein I worked as a Software
                        Development Intern and the other at Walmart wherein I worked as a Software Engineer III Intern. More
                        details on my experience with both companies is provided below</p>
                    <p> I have also worked as a full-time Software Engineer at an Indian Subsidiary (List India Pvt Ltd)
                        of an Italian company named "List SpA" for over 2.5 years ( Jul 2018 - Jan 2021 ) before coming to
                        the US for pursuing my Master's Degree. </p>
                    <p> Please go through the entire portfolio to know more about me! </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="card-body">
                    <SectionHeading headingCss="h4 mt-0 title" headingText="Basic Information"/>
                    <div className="row">
                        <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                        <div className="col-sm-8">26</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                        <div className="col-sm-8">chinmaytawde15@gmail.com</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
                        <div className="col-sm-8">+1 503-984-5000</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
                        <div className="col-sm-8">1604 SW Clay St, Apt 502, 97201, Portland, OR, U.S.A</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-4"><strong className="text-uppercase">Languages:</strong></div>
                        <div className="col-sm-8">English, Hindi, Marathi</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </div>
    )
}

export default About;