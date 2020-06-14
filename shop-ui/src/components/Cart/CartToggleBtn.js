import React from "react";

export default (props) => {
    return (
        <div className="toggle-btn" onClick={props.click}>
            <i className="header-btn fas fa-shopping-cart fa-lg" />
        </div>
    )
}

