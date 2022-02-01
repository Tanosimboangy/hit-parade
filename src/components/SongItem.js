import React from 'react';
import { Link } from 'react-router-dom';
import arrow_up from "../../webroot/img/arrow_down.svg";
import favorite from "../../webroot/img/favorite.svg";
import arrow_down from "../../webroot/img/arrow_down.svg";
import more_horiz from "../../webroot/img/more_horiz.svg";
import favorite_border from "../../webroot/img/favorite_border.svg";
import fullshopping_cart from "../../webroot/img/fullshopping_cart.svg";
import lineshopping_cart from "../../webroot/img/lineshopping_cart.svg";
import List from "../containers/SongItem";
import { favoriteSong, like, dislike, addToCart } from "../actions";
import { useDispatch, useSelector} from "react-redux"

function SongItem({ song }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartItems);
    console.log(cartItems);

    function showCartIcon() {
		const songInCart = cartItems.some(item => item.id === song.id);
		if (songInCart) {
            return <img src={lineshopping_cart} onClick={() => dispatch(removeCartSongs(song.id))} alt="lineshopping_cart" />;
		}
        return <img onClick={() => dispatch(addToCart(song))} src={fullshopping_cart} alt="fullshopping_cart"/>
	}

    return (
        <List key={song.id}>
            <List.Heart>
                <img 
                    onClick={() => dispatch(favoriteSong(song.id))} 
                    src={song.isFavorited ? favorite : favorite_border} 
                    alt="heart"/>
            </List.Heart>
            <List.Details>
                <h3 className="song_title">{song.title}</h3>
                <small className="song_artist">{song.artist}</small>
            </List.Details>
            <List.Like>
                {song.like} 
                <img 
                    src={arrow_up} 
                    onClick={() => dispatch(like(song.id))} 
                    alt="arrow_up"/>
            </List.Like>
            <List.Dislike>
                {song.dislike} 
                <img 
                    src={arrow_down} 
                    onClick={() => dispatch(dislike(song.id))} 
                    alt="arrow_down"/>
            </List.Dislike>
            <List.ShoppingCart>
                {showCartIcon()}
            </List.ShoppingCart>
            <List.Lyrics>
                <Link to={`/song/${song.id}`}>
                    <img src={more_horiz} alt="more_horiz"/>
                </Link>
            </List.Lyrics>
        </List>
    )
}

export default SongItem
