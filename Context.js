import React, { useEffect, useState } from 'react';
import songs from "./songs";
const Context = React.createContext();

function ContextProvider(props) {
    const [allSongs, setAllSongs] = useState([]);
    const [sortedSongs, setsortedSongs] = useState([]);
    const [cartSongs, setCartSongs] = useState([]);

    useEffect(() => {
        setAllSongs(songs);
    }, []);

    function toggleFavorite(Id) {
        const newArraySong = allSongs.map(item => {
            if (item.id === Id) {
                return {
                    ...item,

                    isFavorite: !item.isFavorite,
                }
            }
            return item
        })
        setAllSongs(newArraySong);
    }

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
    
    function addToCart(song) {
        console.log("I am here");
        setCartSongs(prevCart => [...prevCart, song])
    }

    function funcToLyrics() {
        console.log("I am here");
    }

    if (!allSongs.length) return null;

    return(
        <Context.Provider value={{
            allSongs, 
            setAllSongs, 
            increments, 
            decreaments,
            sortedSongs,
            addToCart,
            cartSongs,
            toggleFavorite,
            funcToLyrics
        }}>
            {props.children}
        </Context.Provider>
    )
}

export  { ContextProvider, Context }
