import React, { useContext } from "react";
import { Context } from "../Context";
import SongItem from "./SongItem";

function Popularsongs() {
    const { allSongs } = useContext(Context);
    
    useEffect(() => {
        setsortedSongs(allSongs.sort((a, b) => {
          const like = a.like - a.dislike
          const dislike = b.like - b.dislike
          return dislike - like
        }))
      }, [allSongs])

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