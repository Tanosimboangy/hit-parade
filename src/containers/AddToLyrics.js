import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {useSelector} from "react-redux";

function Song() {
	const { songId } = useParams();
	const history = useHistory();
	const songs = useSelector(state => state.songs);
	const song = songs.find(song => song.id == songId);

	return (
		<div className="lyrics_container">
			<div className="lyrics_subcontainer">
				<h2>
					{song?.title} : {song?.artist}
				</h2>
				<div className="lyrics">
					<h3>Lyrics</h3>
					<p>{song?.lyrics}</p>
				</div>
				<button onClick={() => history.goBack()}>back</button>
			</div>
		</div>
	);
}
export default Song;