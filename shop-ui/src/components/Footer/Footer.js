import React from "react";
import './Footer.css';
import ToTheTopBtn from "./ToTheTopBtn";

export default () => (
    <footer>
        <section className=" container-wide">
            <div className="container__divider"/>
        </section>
        <section className="container-wide">
            <div className="footer-info">
                <div className="footer-info__about">
                    <h3>CRUMBS & DOILIES</h3>
                    <ul>
                        <li>About us</li>
                        <li>FAQs</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-info__contacts">
                    <h3>FOLLOW US ON</h3>
                    <div className="">
                        <i className="fab fa-2x fa-youtube"/>
                        <i className="fab fa-2x fa-twitter-square"/>
                        <i className="fab fa-2x fa-facebook-square"/>
                        <i className="fab fa-2x fa-instagram"/>
                    </div>
                </div>
                <div className="footer-info__location">
                    <h3>FIND US</h3>
                    <ul>
                        <li>Sauletekio al. 15 </li>
                        <li>Vilnius </li>
                    </ul>
                </div>
            </div>
            <div className="footer__back-btn-container">
                <div className="container__divider"/>
               <ToTheTopBtn/>
                <div className="container__divider"/>
            </div>
        </section>
    </footer>
)