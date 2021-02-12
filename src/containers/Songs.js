import React from "react";
import SongItem from "./SongItem";
import {useSelector} from "react-redux";

function Popularsongs() {
	const songs = useSelector(state => state.songs);
    
    function setsortedSongs(songA, songB) {
		const ratioA = songA.like - songA.dislike;
		const ratioB = songB.like - songB.dislike;
		return ratioB - ratioA;
	}

    function displaySongsLists() {
		if (!songs) return;
		const songsList = songs.sort(setsortedSongs).map(song => {
			return (<SongItem key={song.id} song={song}></SongItem>)
			});
		return songsList;
	}
    return displaySongsLists();
}
export default Popularsongs;