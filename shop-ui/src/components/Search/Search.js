import React from "react";
import './Search.css'

export default (props) => {

    let searchClasses = "search-bar";

    if (props.show){
        searchClasses = "search-bar open";
    }

    return(
        <div className={searchClasses}>
            <input type="text"/>
        </div>
    )
}
