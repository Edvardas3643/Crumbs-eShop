import React from "react";
import './Backdrop.css'

const backdrop = props => (
    <div onClick={props.click} className="backdrop"></div>
);

export default backdrop;