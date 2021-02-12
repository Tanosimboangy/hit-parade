import { combineReducers } from 'redux';

function songs(state = [], action) {
	switch (action.type) {
		case 'ADD_SONG': 
			return [...state, action.payload];
		case 'FAVORITE_SONG': {
			const newSongArray = state.map((song) => {
				if (song.id === action.payload) {
					return {
						...song,
						isFavorited: !song.isFavorited,
					};
				}
				return song;
			});
			return newSongArray;
		}
		case "LIKE": {
			const newSong = state.map((song) => {
				if(song.id === action.payload) {
					return {
						...song,
						like: song.like + 1,
					}
				}
				return song;
			})
			return newSong;
		}
		case "DISLIKE": {
			const newSong = state.map((song) => {
				if(song.id === action.payload) {
					return {
						...song,
						dislike: song.dislike + 1,
					}
				}
				return song;
			})
			return newSong;
		}
		default:
			return state;
	}
}


function cartItems(state = [], action) {
	switch (action.type) {
		case 'ADD_TO_CART': {
			return [...state, action.payload];
		}
		case 'REMOVE_CART_ITEM':
			const newCartWithoutSpecificItem = state.filter(
				(item) => item.id !== action.payload
			);
			return [...newCartWithoutSpecificItem];
		case 'EMPTY_CART':
			return [];
		default:
			return state;
	}
}


export default combineReducers({
	songs,
	cartItems,
});
