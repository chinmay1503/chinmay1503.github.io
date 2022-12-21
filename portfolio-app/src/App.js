import './css/main.css';
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect }  from "react"
import Navbar from './Navbar';
import ProfileHeader from './ProfileHeader';
import About from "./About"
import Skills from "./Skills"
import Projects from './Projects';
import WorkExperiences from './Work-Experiences';
import EducationDetails from './EducationDetails';
import References from './References';
import ContactForm from './ContactForm';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div className='page-content'>
      <Navbar />
      <div className="profile-content">
        <ProfileHeader/>
        <About />
        <EducationDetails />
        <WorkExperiences />
        <Projects />
        <Skills />
        <References />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
