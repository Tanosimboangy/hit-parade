import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import state from '../state';

function Song() {
	const { songId } = useParams();
	const history = useHistory();

	const song = state.find(song => song.id == songId);

	return (
		<div className="lyrics_container">
			<div className="lyrics_subcontainer">
				<h2>
					{song?.title} : {song?.artist}
				</h2>
				<div className="lyrics">
					<h3>Lyrics</h3>
					{song?.lyrics}
				</div>
			</div>
			<button onClick={() => history.goBack()}>back</button>
		</div>
	);
}
export default Song;