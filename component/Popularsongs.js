import React, { useContext } from "react";
import { Context } from "../Context";
import SongItem from "./SongItem";

function Popularsongs() {
    const { allSongs } = useContext(Context);
    
    function setsortedSongs(songA, songB) {
		const ratioA = songA.like - songA.dislike;
		const ratioB = songB.like - songB.dislike;
		return ratioB - ratioA;
	}

      function displaySongsLists() {
		if (!allSongs) return;
		const songsList = allSongs
			.sort(setsortedSongs)
			.map(song => <SongItem key={song.id} song={song}></SongItem>);
		return songsList;
	}


    return (
		<div>
			<h1>Popular Songs</h1>
			<div>{displaySongsLists()}</div>
		</div>
	);
}

export default Popularsongs;