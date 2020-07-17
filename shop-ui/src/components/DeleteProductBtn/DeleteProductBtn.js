import React, {useContext} from "react";
import productsApi from "../../api/productsApi";
import {AppContext, UserContext} from "../../App";
import {useHistory} from "react-router-dom";
import "./DeleteProductBtn.css"

export default ({id}) => {

    const {setErrorNotification, clearErrorNotification} = useContext(AppContext)
    const {userData} = useContext(UserContext)
    const history = useHistory();
    const removeProduct = () => {
        productsApi.removeProduct(id).then(() => {
            clearErrorNotification();
            history.push("/")
        }).catch(() => {
            setErrorNotification({error: "Server Error"})
        })
    }

    return (
        <>
            {userData?.roles.includes("admin") ?
                <div className="delete-product-btn" onClick={removeProduct}>Remove</div> : <></>
            }
        </>
    )

}