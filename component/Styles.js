import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import headset from "../img/headset.svg";

function Styles() {
    return (
        <>
            <ul className="styles">
                <li><h2><Link to={`/Styles/${item.style}`}><img src={headset} alt="headset"/>Salegy</Link></h2></li>
                <li><h2><Link to={`/Styles/${item.style}`}><img src={headset} alt="headset"/>Reaggae</Link></h2></li>
                <li><h2><Link to={`/Styles/${item.style}`}><img src={headset} alt="headset"/>Folk</Link></h2></li>
                <li><h2><Link to={`/Styles/${item.style}`}><img src={headset} alt="headset"/>Rap</Link></h2></li>
                <li><h2><Link to={`/Styles/${item.style}`}><img src={headset} alt="headset"/>Rock</Link></h2></li>
            </ul>
            <Switch>
                <Route path={`/Styles/${item.style}`}></Route>
                <Route path={`/Styles/${item.style}`}></Route>
                <Route path={`/Styles/${item.style}`}></Route>
                <Route path={`/Styles/${item.style}`}></Route>
                <Route path={`/Styles/${item.style}`}></Route>
            </Switch>

        </>
    )
}

export default Styles;