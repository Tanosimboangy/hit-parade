import React, { useContext } from "react";
import headset from "../img/headset.svg";
import { useParams } from 'react-router-dom';
import { Context } from "../Context";

function StyleContents() {
    const { name } = useParams();
    const { allSongs } = useContext(Context);
    const newSongs = allSongs.filter(item => item.style === name);
    const newSong = newSongs.map(items => {
        return (
            <ul key={items.id} className="styles">
                <li><h3>{items.title}</h3></li>
                <li><p>{items.artist}</p></li>
            </ul>
        )
    } )

    return (
        <div className="style">
            <h2 className="styles_heading"><img src={headset} alt="headset"/>{name}</h2>
            {newSong}
        </div>
    )
}

export default StyleContents
