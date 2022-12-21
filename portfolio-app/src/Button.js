import React from "react";


const Button = (props) => {
    return (
        <a className="btn btn-default btn-round btn-lg btn-icon" href={props.link} rel="tooltip" title={props.tooltip}><i className={props.iconClassName}></i></a>
    )
}

export default Button;