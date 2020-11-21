import React, { useEffect, useState } from 'react';
import songs from "./songs";
const Context = React.createContext();

function ContextProvider(props) {
    const [allSongs, setAllSongs] = useState([]);
    const [sortedSongs, setsortedSongs] = useState([]);

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

    useEffect(() => {
        setsortedSongs(allSongs.sort((a, b) => {
          const like = a.like - a.dislike
          const dislike = b.like - b.dislike
          return dislike - like
        }))
      }, [allSongs])
    
    return(
        <Context.Provider value={{
            allSongs, 
            setAllSongs, 
            increments, 
            decreaments,
            sortedSongs
        }}>
            {props.children}
        </Context.Provider>
    )
}

export  { ContextProvider, Context }
