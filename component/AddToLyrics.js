import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Context } from '../Context';

export default function Song() {
	const { songId } = useParams();
	const { songs } = useContext(Context);
	const history = useHistory();

	const song = songs.find(song => song.id === songId);

	return (
		<div>
			<h1>
				<button onClick={() => history.goBack()}>back</button>
				{song?.artist} - {song?.title}
			</h1>
			<div>
				<h3>Lyrics</h3>
				{song?.lyrics}
			</div>
		</div>
	);
}
