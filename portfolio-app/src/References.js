import React from "react";
import SectionHeading from "./SectionHeading"
import Reference from "./Reference"
import "./css/references.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

let references = require('./json/references-info.json');

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const References = () => {
    return (
        <div className="section" id="reference">
            <div className="container cc-reference">
                <SectionHeading headingCss="h4 text-center mb-4 title" headingText="References"/>
                <div className="card" data-aos="zoom-in">
                    <Carousel 
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    keyBoardControl={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={10000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile","desktop","superLargeDesktop"]}
                    responsive={responsive}
                    >
                        {references.map((reference, index) => (
                        <Reference 
                            key={index}
                            imgPath={reference.img_path} 
                            referenceName={reference.name} 
                            designation={reference.designation} 
                            companyName={reference.company_name} details={reference.details}
                            />
                        ))}
                    </Carousel>
                        
                </div>
            </div>
        </div>
    )
}

export default References;