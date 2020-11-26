import React, { useEffect, useState } from 'react';
import songs from "./songData.json";
const Context = React.createContext();

function ContextProvider({children}) {
    const [allSongs, setAllSongs] = useState([]);
    const [cartSongs, setCartSongs] = useState([]);
    
    // LOCAL STORAGE
    useEffect(() => {
		const lsSongs = JSON.parse(localStorage.getItem('allSongs'));
        lsSongs ? setAllSongs(lsSongs) : setAllSongs(songs);

		const lsCartItems = JSON.parse(localStorage.getItem('cartSongs'));
		lsCartItems && setCartSongs(lsCartItems);
	}, []);

	useEffect(() => {
		localStorage.setItem('allSongs', JSON.stringify(allSongs));
	}, [allSongs]);

	useEffect(() => {
		localStorage.setItem('cartSongs', JSON.stringify(cartSongs));
	}, [cartSongs]);

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

    function addToCart(song) {
        setCartSongs(prevItems => [...prevItems, song]);
    }

    function removeCartSongs(songId) {
		const filteredCartItems = cartSongs.filter(cartItem => cartItem.id !== songId);
		setCartSongs(filteredCartItems);
	}

	function emptyCart() {
		setCartSongs([]);
	}

    if (!allSongs.length) return null;

    return(
        <Context.Provider value={{
            allSongs, 
            setAllSongs, 
            increments, 
            decreaments,
            addToCart,
            cartSongs,
            toggleFavorite,
            removeCartSongs,
            emptyCart
        }}>
            {children}
        </Context.Provider>
    )
}

export  { ContextProvider, Context }
