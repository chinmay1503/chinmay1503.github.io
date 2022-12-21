import React, { useState, useEffect } from "react"


const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    //navbar scroll changeBackground function
    const changeBackground = () => {
        if (window.scrollY >= 66) {
        setNavbar(true)
        } else {
        setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })
    
    return (
        <header>
            <div className="profile-page sidebar-collapse">
                <nav className= {navbar ? "navbar navbar-expand-lg fixed-top bg-primary" : "navbar navbar-expand-lg fixed-top navbar-transparent bg-primary"}>
                    <div className="container">
                        <div className="navbar-translate"><a className="navbar-brand" href="#" rel="tooltip">Portfolio</a>
                            <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                            aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation"><span
                                className="navbar-toggler-bar bar1"></span><span className="navbar-toggler-bar bar2"></span><span
                                className="navbar-toggler-bar bar3"></span></button>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end" id="navigation">
                            <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link smooth-scroll" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link smooth-scroll" href="#education">Education</a></li>
                            <li className="nav-item"><a className="nav-link smooth-scroll" href="#experience">Experience</a></li>
                            <li className="nav-item"><a className="nav-link smooth-scroll" href="#skill">Skills</a></li>
                            <li className="nav-item"><a className="nav-link smooth-scroll" href="#projects">Projects</a></li>
                            <li className="nav-item"><a className="nav-link smooth-scroll" href="#contact-form">Contact Me</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;