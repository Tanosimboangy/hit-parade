import React from 'react';
// import { Context } from '../Context';
// import delete_icon from "../img/delete_icon.svg";

function Carts() {

//   const { cartSongs, emptyCart, removeCartSongs } = useContext(Context);
//   const [total, setTotal] = useState(0);
  
//   useEffect(() => {
// 		const newTotal = cartSongs.reduce((total, song) => {
// 			total += song.price;
// 			return total;
// 		}, 0);
// 		setTotal(newTotal);
// 	}, [cartSongs]);

// 	function completeOrder() {
// 		alert(`THANK YOU FOR YOUR ORDER. PLEASE PAY : ${total}`);
// 		emptyCart();
// 	}

  return (
	  <>
        <h1>carts songs</h1>
		{/* <div>
			{cartSongs.map(song => (
				<div key={song.id} className="cart_container">
					<img onClick={() => removeCartSongs(song.id)} src={delete_icon} alt="delete_icon"/>
					<div>
						<h4>{song.title}</h4>
						<p>{song.artist}</p>
					</div>
					<div className="price">{song.price} Ar</div>
				</div>
			))}
		</div>
		{cartSongs.length !== 0 ? <p>Total: {total} Ar</p> : 'Empty Cart.'}
		{total !== 0 && <button onClick={completeOrder}>Buy</button>} */}
		</>
	);
}

export default Carts;