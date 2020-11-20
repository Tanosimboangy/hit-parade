import React from 'react'
import songs from "./songs.json";
import shopping_cart from "./img/shopping_cart.svg";
import arrow_up from "./img/arrow_up.svg";
import arrow_down from "./img/arrow_down.svg";

function App() {
    console.log(Number(Date.now()));
    return (
        <div className="wrapper">
            <h1>Hit Parade Project</h1>
            {
                songs.map(item => {
                    return (
                        <ul className="container" key={item.id}>
                            <li>
                                <h3>Title: {item.title}</h3>
                                <small>Artist: {item.artist}</small>
                            </li>
                            <li>{item.like} <img src={arrow_up} alt="arrow_up"/></li>
                            <li>{item.dislike} <img src={arrow_down} alt="arrow_down"/></li>
                            <li><img src={shopping_cart} alt="shopping_cart"/></li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default App;