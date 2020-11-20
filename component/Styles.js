import React from "react";

function Popularsongs() {
    return (
        <>
            {songs.map(item => {
                return (
                    <ul className="container" key={item.id}>
                        <li><img src={item.isFavorite === "true" ? favorite : favorite_border} alt="heart"/></li>
                        <li>
                            <h3>Title: {item.title}</h3>
                            <small>Artist: {item.artist}</small>
                        </li>
                        <li className="arrow">{item.like} <img src={arrow_up} alt="arrow_up"/></li>
                        <li className="arrow">{item.dislike} <img src={arrow_down} alt="arrow_down"/></li>
                        <li><img src={shopping_cart} alt="shopping_cart"/></li>
                        <li><img src={more_horiz} alt="more_horiz"/></li>
                    </ul>
                )
            })}
        </>
    )
}

export default Popularsongs;