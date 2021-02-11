import React from 'react';
import { Link } from 'react-router-dom';
import arrow_up from "../../img/arrow_up.svg";
import arrow_down from "../../img/arrow_down.svg";
import more_horiz from "../../img/more_horiz.svg";
import favorite_border from "../../img/favorite_border.svg";
import favorite from "../../img/favorite.svg";
import List from "../components/SongItem";
// import fullshopping_cart from "../img/fullshopping_cart.svg";
// import lineshopping_cart from "../img/lineshopping_cart.svg";

function SongItem({ song }) {
    // const {
    //     increments, 
    //     decreaments,
    //     addToCart,
    //     toggleFavorite,
    //     cartSongs,
	// 	removeCartSongs,
    // } = useContext(Context);

    // function showCartIcon() {
	// 	const songInCart = cartSongs.some(item => item.id === song.id);
	// 	if (songInCart) {
    //         return <img src={lineshopping_cart} onClick={() => removeCartSongs(song.id)} alt="lineshopping_cart" />;
	// 	}
    //     return <img onClick={() => addToCart(song)} src={fullshopping_cart} alt="fullshopping_cart"/>
	// }

    return (
        <List key={song.id}>
            <List.Heart>
                <img 
                    // onClick={() => toggleFavorite(song.id)} 
                    src={song.isFavorite ? favorite : favorite_border} 
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
                    // onClick={() => increments(song.id)} 
                    alt="arrow_up"/>
            </List.Like>
            <List.Dislike>
                {song.dislike} 
                <img 
                    src={arrow_down} 
                    // onClick={() => decreaments(song.id)} 
                    alt="arrow_down"/>
            </List.Dislike>
            <List.ShoppingCart>
                {/* {showCartIcon()} */}
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
