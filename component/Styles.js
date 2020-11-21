import React, {useContext} from "react";
import headset from "../img/headset.svg";
import { Link } from 'react-router-dom';
import { Context } from "../Context";


function Styles() {
    const { allSongs } = useContext(Context);
    console.log(allSongs);
    return (
        <>
            <ul className="styles">
                <li><h2><Link to="/style/salegy"><img src={headset} alt="headset"/>Salegy</Link></h2></li>
                <li><h2><Link to="/style/reggae"><img src={headset} alt="headset"/>Reaggae</Link></h2></li>
                <li><h2><Link to="/style/folk"><img src={headset} alt="headset"/>Folk</Link></h2></li>
                <li><h2><Link to="/style/rap"><img src={headset} alt="headset"/>Rap</Link></h2></li>
                <li><h2><Link to="/style/rock"><img src={headset} alt="headset"/>Rock</Link></h2></li>
            </ul>
        </>
    )
}

export default Styles;