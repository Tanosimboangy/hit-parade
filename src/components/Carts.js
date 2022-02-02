import React, {useState, useEffect} from 'react';
import delete_icon from "../webroot/img/delete_icon.svg";
import {useDispatch, useSelector} from "react-redux";
import { removeCartItem, emptyCart} from "../actions";
import styled from 'styled-components';

const Container = styled.div`
	margin: 0;
`
const CartList = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
	padding: 20px 20px;
    background: white;
    border-radius: 6px;
    box-shadow: 0px 1px 3px black;
    margin-bottom: 20px;
`
const SongDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
`
const SongTitle = styled.h4`
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
`
const SongArtist = styled.p`
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
`
const RemoveCartItemBtn = styled.button`
	display: inline;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 0;
    background: none;
    padding: 0;
`
const Total = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
	gap: 16px;
`
const PriceTotal = styled.p`
	font-size: 18px;
	font-weight: 600;
	color: #272343;
`
const BuyBtn = styled.button`
	display: inline-block;
    padding: 0.7em 1.4em;
    border-radius: 4px;
    box-sizing: border-box;
    text-transform: uppercase;
    border: none;
    outline: none;
    cursor: pointer;
    color: #FFFFFF;
    background-color: #3369ff;
    text-align: center;
    position: relative;
    font-weight: 700;
    font-size: 16px;
	:active{
	 top:0.1em;
	}
	@media all and (max-width:30em){
	  display:block;
	  margin:0.4em auto;
	}
`

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
		<Container>
				{cartItems.map(song => (
					<CartList>
						<SongDetails>
							<SongTitle>{song.title}</SongTitle>
							<SongArtist>{song.artist}</SongArtist>
						</SongDetails>
						<PriceTotal>{song.price} Ar</PriceTotal>
						<RemoveCartItemBtn>
							<img onClick={() => dispatch(removeCartItem(song.id))} src={delete_icon} alt="delete_icon"/>
						</RemoveCartItemBtn>
					</CartList>
				))}
			<Total>
				{cartItems.length !== 0 ? <PriceTotal>Total: {total} Ar</PriceTotal> : <PriceTotal>Empty Cart.</PriceTotal>}
				{total !== 0 && <BuyBtn onClick={completeOrder}>Buy</BuyBtn>}
			</Total>
		</Container>
	);
}

export default Carts;