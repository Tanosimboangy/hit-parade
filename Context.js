import React, { useEffect, useState } from 'react';
import songs from "./songs";
const Context = React.createContext();

function ContextProvider(props) {
    const [allSongs, setAllSongs] = useState([]);

    useEffect(() => {
        setAllSongs(songs);
    }, []);

    function increments(itemId) {
        const newList = allSongs.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    like: item.like + 1,
                }
            }
            return item;
        });
        setAllSongs(newList);
    }
    function decreaments(itemid) {
        const newlist = allSongs.map(item => {
            if (item.id === itemid) {
                return {
                    ...item,
                    dislike: item.dislike + 1,
                }
            }
            return item;
        });
        setAllSongs(newlist);
    }
    
    return(
        <Context.Provider value={{allSongs, setAllSongs, increments, decreaments}}>
            {props.children}
        </Context.Provider>
    )
}

export  { ContextProvider, Context }
