import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../Context';

function Carts() {

  const { cartSongs, emptyCart } = useContext(Context);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
		const newTotal = cartSongs.reduce((total, song) => {
			total += song.price;
			return total;
		}, 0);
		setTotal(newTotal);
	}, [cartSongs]);

	function completeOrder() {
		alert(`THANK YOU FOR YOUR ORDER. PLEASE PAY : ${total}`);
		emptyCart();
	}

  return (
		<div>
			<h1>Cart</h1>
			<div className="container">
				{cartSongs.map(song => (
					<div key={song.id}>
						<button>Delete</button>
						<div>
							<div>{song.title}</div>
							<div>{song.artist}</div>
						</div>
						<div className="price">{song.price} Ar</div>
					</div>
				))}
			</div>
			{cartSongs.length !== 0 ? <p>Total: {total} Ar</p> : 'Empty Cart.'}
			{total !== 0 && <button onClick={completeOrder}>Buy</button>}
		</div>
	);
}

export default Carts;