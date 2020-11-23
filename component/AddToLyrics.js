import React, { useContext } from 'react';
import { Context } from "../Context";

function AddToLyrics() {
    const { allSongs } = useContext(Context);

    function funcToLyrics(Id) {
        const lyricsLists = allSongs.map(item => {
            if (item.id === Id) {
                retur (
                    <>
                      <h3>Lyrics</h3>  
                      <p>{item.lyrics}</p>
                    </>
                )
            }
        })  
        return lyricsLists
    }
    

    return (
            <>
                {funcToLyrics()}
                <h2>Hello jacquit</h2>
            </>
            )
}

export default AddToLyrics
