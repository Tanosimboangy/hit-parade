import React, { useContext } from "react";
import headset from "../img/headset.svg";
import { useParams } from 'react-router-dom';
import { Context } from "../Context";

function StyleContents() {
    const name = useParams();
    const { allPhotos } = useContext(Context);
    console.log(allPhotos);
    console.log(name);

    return (
        <div className="styles">
            <h2><img src={headset} alt="headset"/>{name.styleName}</h2>
        </div>
    )
}

export default StyleContents
