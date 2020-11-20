import React from 'react';
import shopping_cart from "./img/shopping_cart.svg";
import arrow_up from "./img/arrow_up.svg";
import arrow_down from "./img/arrow_down.svg";
import more_horiz from "./img/more_horiz.svg";
import songs from "./songs.json";
// import { context } from "./useContext.js";

function App() {

    const songLists = songs.map(item => {
        return (
            <ul className="container" key={item.id}>
                <li>
                    <h3>Title: {item.title}</h3>
                    <small>Artist: {item.artist}</small>
                </li>
                <li>{item.like} <img src={arrow_up} alt="arrow_up"/></li>
                <li>{item.dislike} <img src={arrow_down} alt="arrow_down"/></li>
                <li><img src={shopping_cart} alt="shopping_cart"/></li>
                <li><img src={more_horiz} alt="more_horiz"/></li>
            </ul>
        )
    })


    return (
        <div className="wrapper">
            <h1>Hit Parade</h1>
            <ul>
                <li><h2>Popular songs</h2></li>
                <li><h2>Styles</h2></li>
                <li><h2>Popular songs</h2></li>
                <li><h2>Popular songs</h2></li>
            </ul>
            {songLists}
        </div>
    )
}

export default App;