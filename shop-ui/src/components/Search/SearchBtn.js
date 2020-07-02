import React, {useContext} from "react";
import './Search.css'
import {AppContext} from "../../App";

export default () => {

    const {searchBlockHandler} = useContext(AppContext)

    return (<div>
            <i onClick={searchBlockHandler} className="fas fa-search fa-lg"/>
        </div>
    )
}
