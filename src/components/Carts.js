import React, {useState, useEffect} from 'react';
import delete_icon from "../../webroot/img/delete_icon.svg";
import {useDispatch, useSelector} from "react-redux";
import { removeCartItem, emptyCart} from "../actions";

function Carts() {
	const [total, setTotal] = useState(0);
	const cartItems = useSelector(state => state.cartItems);
	const dispatch = useDispatch();
  
  	useEffect(() => {
		const newTotal = cartItems.reduce((total, song) => {
			total += song.price;
			return total;
		}, 0);
		setTotal(newTotal);
	}, [cartItems]);

	function completeOrder() {
		alert(`THANK YOU FOR YOUR ORDER. PLEASE PAY : ${total}`);
		dispatch(emptyCart());
	}

  return (
		<>
			<div>
				{state.map(song => (
					<div key={song.id} className="cart_container">
						<img onClick={() => dispatch(removeCartItem(song.id))} src={delete_icon} alt="delete_icon"/>
						<div>
							<h4>{song.title}</h4>
							<p>{song.artist}</p>
						</div>
						<div className="price">{song.price} Ar</div>
					</div>
				))}
			</div>
			<div>
				{cartSongs.length !== 0 ? <p>Total: {total} Ar</p> : 'Empty Cart.'}
				{total !== 0 && <button onClick={completeOrder}>Buy</button>}
			</div>
		</>
	);
}

export default Carts;