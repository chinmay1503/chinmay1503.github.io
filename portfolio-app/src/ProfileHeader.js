import React from "react";
import Button from "./Button"
import "./css/profile-header.css"

const ProfileHeader = () => {
    return (
    <div className="profile-page">
        <div className="wrapper">
          <div className="page-header page-header-small" filter-color="green">
            <div className="page-header-image" data-parallax="true" style={{backgroundImage: "url('/images/cc-bg-1.jpg')"}}>
            </div>
            <div className="container">
              <div className="content-center">
                <div className="cc-profile-image"><a href="#"><img src="/images/chinmay15.jpg" alt="Chinmay Tawde" /></a></div>
                <div className="h2 title">Chinmay Tawde</div>
                <p className="category text-white"> Full Stack Software Developer</p>
              </div>
            </div>
            <div className="section">
              <div className="container">
                  <div className="button-container">
                    <Button link="https://github.com/chinmay1503" tooltip="Browse Github" iconClassName="fa fa-github"/>
                    <Button link="https://www.linkedin.com/in/chinmay15/" tooltip="Connect with me on LinkedIn" iconClassName="fa fa-linkedin"/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProfileHeader;