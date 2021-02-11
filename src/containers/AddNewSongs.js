import React from "react";
import Form from "../components/Form";
// import state from "?../state";

function Add() {

    // function addNewSong(e) {
    //     e.preventDefault();
    //     const eventTarget = e.target;
    //     const title = eventTarget.title.value;
    //     const artist = eventTarget.artist.value;
    //     const price = eventTarget.price.value;
    //     const style = eventTarget.style.value;
    //     const lyrics = eventTarget.lyrics.value;

	// 	if (!title, !artist, !price, !style) return;
	// 	const newSong = {
    //         id: Date.now(),
    //         title: title,
    //         artist: artist,
    //         price: price,
    //         isFavorite: false,
    //         style: style,
    //         lyrics: lyrics,
    //         like: 0,
    //         dislike: 0,
	// 	};
	// 	const newSongList = [...state, newSong];
	// 	setAllSongs(newSongList);
	// 	e.target.reset();
	// }

    return (
        <Form>
            <Form.Header>Add a new song</Form.Header>
            <Form.Input name="title" type="text" placeholder="Title" required/>
            <Form.Input name="artist" type="text" placeholder="Artist" required/>
            <Form.Input name="price" type="number" placeholder="price" required/>
            <Form.Select name="style" required>
                <option value="Rock">Rock</option>
                <option value="Rnb">Rnb</option>
                <option value="Slow">Slow</option>
                <option value="Salegy">Salegy</option>
            </Form.Select>
            <Form.Textarea name="lyrics" cols="50" rows="5" required />
            <Form.Button type="submit">Add</Form.Button>
        </Form>
    )
}


export default Add;