import React, { useContext } from 'react';
import { Context } from "../Context";

function Carts() {
    const { cartSongs } = useContext(Context);
    const cartSongsItem = cartSongs.map(song => {
      if (song.cart === true) {
        return (
            <div key={song.id} className="cart_songs">
              <button className="delete" className="delete">delete</button>
              <div>
                <h3>{song.title}</h3>
                <h5>{song.artist}</h5>
              </div>
              <p>{song.price} Ar</p>
            </div>
          )
        }
      })

    return (<>{cartSongsItem}</>)
}
export default Carts;