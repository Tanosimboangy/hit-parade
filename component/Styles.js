import React from "react";
import headset from "../img/headset.svg";

function Styles() {
    return (
        <>
            <ul>
                <li><h2><img src={headset} alt="headset"/>Salegy</h2></li>
                <li><h2><img src={headset} alt="headset"/> Reaggae</h2></li>
                <li><h2><img src={headset} alt="headset"/> Folk</h2></li>
                <li><h2><img src={headset} alt="headset"/> Rap</h2></li>
                <li><h2><img src={headset} alt="headset"/> Rock</h2></li>
            </ul>
        </>
    )
}

export default Styles;