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
