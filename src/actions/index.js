export function favoriteSong(songId) {
	return {
		type: 'FAVORITE_SONG',
		payload: songId,
	};
}
export function like(songId) {
	return {
		type: 'LIKE',
		payload: songId,
	};
}
export function dislike(songId) {
	return {
		type: 'DISLIKE',
		payload: songId,
	};
}
export function addSong(song) {
	return {
		type: 'ADD_SONG',
		payload: song,
	};
}
export function addToCart(cart) {
	return {
		type: 'ADD_TO_CART',
		payload: cart,
	};
}
export function emptyCart(cart) {
	return {
		type: 'EMPTY_CART',
		payload: cart,
	};
}
export function removeCartItem(cart) {
	return {
		type: 'REMOVE_CART_ITEM',
		payload: cart,
	};
}
