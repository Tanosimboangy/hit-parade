import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {useSelector} from "react-redux";
import Container from '../components/AddToLyrics';

function Song() {
	const { songId } = useParams();
	const history = useHistory();
	const songs = useSelector(state => state.songs);
	const song = songs.find(song => song.id == songId);

	return (
		<Container>
			<Container.Artist>
				{song?.title} : {song?.artist}
			</Container.Artist>
			<Container.Lyrics>
				<Container.Header>Lyrics</Container.Header>
				<Container.Text>{song?.lyrics}</Container.Text>
			</Container.Lyrics>
			<Container.Button onClick={() => history.goBack()}>Back to styles</Container.Button>
		</Container>
	);
}
export default Song;