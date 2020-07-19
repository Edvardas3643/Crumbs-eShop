import React, {useContext} from "react";
import {UserContext} from "../../App";
import {useTranslation} from "react-i18next";

export default () => {

    const {userData} = useContext(UserContext);

    const {t} = useTranslation("checkout")


    return (
        <>
            {userData && userData.paymentInfo ?
                <div className="payment-info-details">
                    <div className="payment-info-description">
                        <div>{t("name")} </div>
                        <div>{t("surname")} </div>
                        <div>{t("address")} </div>
                        <div>{t("postCode")} </div>
                        <div>{t("cardNumber")} </div>
                    </div>
                    <div className="payment-info-contents">
                        <div>{userData.paymentInfo.name ? userData.paymentInfo.name : " "}</div>
                        <div>{userData.paymentInfo.surname ? userData.paymentInfo.surname : " "}</div>
                        <div>{userData.paymentInfo.address ? userData.paymentInfo.address : " "}</div>
                        <div>{userData.paymentInfo.postCode ? userData.paymentInfo.postCode : " "}</div>
                        <div>{userData.paymentInfo.cardNumber ? userData.paymentInfo.cardNumber : " "}</div>
                    </div>
                </div>
                : <></>
            }
        </>)

}