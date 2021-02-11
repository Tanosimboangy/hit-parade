import React from "react";
import state from "../state";
import SongItem from "./SongItem";

function Popularsongs() {
    
    function setsortedSongs(songA, songB) {
		const ratioA = songA.like - songA.dislike;
		const ratioB = songB.like - songB.dislike;
		return ratioB - ratioA;
	}

    function displaySongsLists() {
		if (!state) return;
		const songsList = state.sort(setsortedSongs).map(song => {
			return (
				<SongItem key={song.id} song={song}></SongItem>
			)
			});
		return songsList;
	}

    return displaySongsLists();
}

export default Popularsongs;