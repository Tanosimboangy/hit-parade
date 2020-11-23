import React, { useContext } from "react";
import shopping_cart from "../img/shopping_cart.svg";
import arrow_up from "../img/arrow_up.svg";
import arrow_down from "../img/arrow_down.svg";
import more_horiz from "../img/more_horiz.svg";
import favorite from "../img/favorite.svg";
import favorite_border from "../img/favorite_border.svg";
import { Context } from "../Context";
import { Link } from "react-router-dom";

function Popularsongs({song}) {
    const { 
        sortedSongs, 
        increments, 
        decreaments,
        addToCart,
        toggleFavorite,
        funcToLyrics
    } = useContext(Context);

    return (
        <>
            {sortedSongs.map((item) => {
                return (
                    <ul className="container" key={item.id}>
                        <li><img onClick={() => toggleFavorite(item.id)} src={item.isFavorite ? favorite : favorite_border} alt="heart"/></li>
                        <li>
                            <h3>Title: {item.title}</h3>
                            <small>Artist: {item.artist}</small>
                        </li>
                        <li className="arrow">{item.like} <img src={arrow_up} onClick={() => increments(item.id)} alt="arrow_up"/></li>
                        <li className="arrow">{item.dislike} <img src={arrow_down} onClick={() => decreaments(item.id)} alt="arrow_down"/></li>
                        <li><img onClick={() => addToCart(item.id)} src={shopping_cart} alt="shopping_cart"/></li>
                        <li><Link to="/lyrics"><img src={more_horiz} alt="more_horiz"/></Link></li>
                    </ul>
                )
            })}
        </>
    )
}

export default Popularsongs;