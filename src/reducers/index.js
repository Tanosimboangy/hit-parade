import { combineReducers } from 'redux';

function addNewSongs(state = "") {
	return state;
}
function addToLyrics(state = "") {
	return state;
}
function carts(state = "") {
	return state;
}
function popularSongs(state = "") {
	return state;
}
function SongItem(state = "") {
	return state;
}
function StyleContents(state = "") {
	return state;
}
function Styles(state = "") {
	return state;
}

export default combineReducers({
	addNewSongs,
    addToLyrics,
    carts,
    popularSongs,
    SongItem,
    StyleContents,
    Styles,
});
