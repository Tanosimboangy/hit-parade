import { combineReducers } from 'redux';

function addNewSongs(state = 0, action) {
	return state;
}
function addToLyrics(state = 0, action) {
	return state;
}
function carts(state = 0, action) {
	return state;
}
function popularSongs(state = 0, action) {
	return state;
}
function SongItem(state = 0, action) {
	return state;
}
function StyleContents(state = 0, action) {
	return state;
}
function Styles(state = 0, action) {
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
