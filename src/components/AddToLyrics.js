import React from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import { Context } from '../Context';

function Song() {
	// const { songId } = useParams();
	// const { allSongs } = useContext(Context);
	// const history = useHistory();

	// const song = allSongs.find(song => song.id == songId);

	return (
        <h1>Add to Lyrics</h1>
		// <div className="lyrics_container">
		// 	<div className="lyrics_subcontainer">
		// 		<h2>
		// 			{song?.title} : {song?.artist}
		// 		</h2>
		// 		<div className="lyrics">
		// 			<h3>Lyrics</h3>
		// 			{song?.lyrics}
		// 		</div>
		// 	</div>
		// 	<button onClick={() => history.goBack()}>back</button>
		// </div>
	);
}
export default Song;