import React from "react";
import headset from "../webroot/img/headset.svg";
import { useParams, Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import Container  from "../components/StyleContents";

function StyleContents() {
    const { name } = useParams();
    const songs = useSelector(state => state.songs);
    const newSongs = songs.filter(item => item.style === name);

    return (
        <Container>
            <Container.Style><img src={headset} alt="headset"/>
                {name}
            </Container.Style>
            {newSongs.map(items => 
                <Link to={`/song/${items.id}`} key={items.id}>
                    <Container.Base>
                        <Container.Title>{items.title}</Container.Title>
                        <Container.Artist>{items.artist}</Container.Artist>
                    </Container.Base>
                </Link>
                )}
        </Container>
    )
}

export default StyleContents
