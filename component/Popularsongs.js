import React, { useState, useContext } from "react";
import shopping_cart from "../img/shopping_cart.svg";
import arrow_up from "../img/arrow_up.svg";
import arrow_down from "../img/arrow_down.svg";
import more_horiz from "../img/more_horiz.svg";
import favorite from "../img/favorite.svg";
import favorite_border from "../img/favorite_border.svg";
import { Context } from "../Context";

function Popularsongs() {
    const { allSongs, setAllSongs } = useContext(Context);

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
    function decreaments(itemId) {
        const newList = allSongs.map(item => {
            if (item.id === itemId) {
                if (item.dislike > 0) {
                    return {
                        ...item,
                        dislike: item.dislike - 1,
                    }
                }
            }
            return item;
        });
        setAllSongs(newList);
    }

    function handleFavorite(Id) {
        const newArraySong = allSongs.map(item => {
            if (item.id === Id) {
                console.log(item.id)
                return {
                    ...item,
                    isFavorite: !item.isFavorite,
                }
            }
            return {...item}
        })
        setAllSongs(newArraySong);
    }

    return (
        <>
            {allSongs.map((item) => {
                return (
                    <ul className="container" key={item.id}>
                        <li><img onClick={() => handleFavorite(item.id)} src={item.isFavorite === "True" ? favorite : favorite_border} alt="heart"/></li>
                        <li>
                            <h3>Title: {item.title}</h3>
                            <small>Artist: {item.artist}</small>
                        </li>
                        <li className="arrow">{item.like} <img src={arrow_up} onClick={() => increments(item.id)} alt="arrow_up"/></li>
                        <li className="arrow">{item.dislike} <img src={arrow_down} onClick={() => decreaments(item.id)} alt="arrow_down"/></li>
                        <li><img src={shopping_cart} alt="shopping_cart"/></li>
                        <li><img src={more_horiz} alt="more_horiz"/></li>
                    </ul>
                )
            })}
        </>
    )
}

export default Popularsongs;