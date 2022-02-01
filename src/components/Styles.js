import React from "react";
import headset from "../../webroot/img/headset.svg";
import List from "../components/Styles";
import { Link } from 'react-router-dom';

function Styles() {
    return (
        <List>
            <List.Item><Link to="/style/Rnb"><img src={headset} alt="headset"/>Rnb</Link></List.Item>
            <List.Item><Link to="/style/Rock"><img src={headset} alt="headset"/>Rock</Link></List.Item>
            <List.Item><Link to="/style/Slow"><img src={headset} alt="headset"/>Slow</Link></List.Item>
            <List.Item><Link to="/style/Salegy"><img src={headset} alt="headset"/>Salegy</Link></List.Item>
        </List>
    )
}

export default Styles;