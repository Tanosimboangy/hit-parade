import React, { useContext } from 'react';
import { Context } from "../Context";

function Carts() {
    const { cartSongs } = useContext(Context);
    // console.log(cartSongs);

    const cartSongsItem = cartSongs.map((song, index) => {
        return (<li key={index}>
          <img src={trash} alt="trash" className="delete"    />
          <div>
            <h3>{song.title}</h3>
            <h5>{song.artist}</h5>
          </div>
          <p>URO {song.price}</p>
        </li>)
      })

    return (
        <div>
            {cartSongsItem}
        </div>
    )
}

export default Carts
