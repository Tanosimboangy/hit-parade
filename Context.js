import React, { useEffect, useState } from 'react';
import songs from "./songs";
const Context = React.createContext();

function ContextProvider(props) {
    const [allSongs, setAllSongs] = useState([]);

    useEffect(() => {
        setAllSongs(songs);
    }, []);
    
    return(
        <Context.Provider value={{allSongs, setAllSongs}}>
            {props.children}
        </Context.Provider>
    )
}

export  { ContextProvider, Context }
