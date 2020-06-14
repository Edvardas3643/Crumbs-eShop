import React from "react";

export default () => {
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;

        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    }

    return(
    <h3 onClick={scrollToTop} className="back-btn-container__back-btn">TO THE TOP</h3>
)
}