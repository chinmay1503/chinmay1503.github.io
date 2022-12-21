import React from "react";

const SectionHeading = (props) => {
    return (
        <div className={props.headingCss}>{props.headingText}</div>
    )
}

export default SectionHeading;