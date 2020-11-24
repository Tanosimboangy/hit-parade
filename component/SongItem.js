import React, { useContext } from 'react';
import { Context } from '../Context';
// import { Link } from 'react-router-dom';
// import shopping_cart from "../img/shopping_cart.svg";
import arrow_up from "../img/arrow_up.svg";
import arrow_down from "../img/arrow_down.svg";
import more_horiz from "../img/more_horiz.svg";
import favorite from "../img/favorite.svg";
import fullshopping_cart from "../img/fullshopping_cart.svg";
import lineshopping_cart from "../img/lineshopping_cart.svg";

function SongItem({ song }) {
    const {
        increments, 
        decreaments,
        addToCart,
        toggleFavorite,
        funcToLyrics,
        cartSongs,
		removeCartItem,
    } = useContext(Context);

    function showCartIcon() {
		const songInCart = cartSongs.some(item => item.id === song.id);
		if (songInCart) {
            return <img src={fullshopping_cart} onClick={() => removeCartItem(song.id)} alt="fullshopping_cart" />;
		}
        return <img onClick={() => addToCart(song)} src={lineshopping_cart} alt="lineshopping_cart"/>
	}

    return (
        <>
            return (
                <ul className="container" key={song.id}>
                    <li className="heart_icon">
                        <img onClick={() => toggleFavorite(song.id)} src={song.isFavorite ? favorite : favorite_border} alt="heart"/>
                    </li>
                    <li>
                        <h3 className="song_title">{song.title}</h3>
                        <small className="song_artist">{song.artist}</small>
                    </li>
                    <li className="song_like">
                        {song.like} 
                        <img src={arrow_up} onClick={() => increments(song.id)} alt="arrow_up"/>
                    </li>
                    <li className="song_dislike">
                        {song.dislike} 
                        <img src={arrow_down} onClick={() => decreaments(song.id)} alt="arrow_down"/>
                    </li>
                    <li className="shopping_cart">
                        {showCartIcon()}
                    </li>
                    <li className="more_horiz">
                        <Link to={`/song/${song.id}`}>
                            <img src={more_horiz} alt="more_horiz"/>
                        </Link>
                    </li>
                </ul>
            )
        </>
    )
}

export default SongItem
