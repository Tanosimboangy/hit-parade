import React from "react";
// import { Context } from "../../Context";

function Add() {
    // const {allSongs, setAllSongs} = useContext(Context);

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
	// 	const newSongList = [...allSongs, newSong];
	// 	setAllSongs(newSongList);
	// 	e.target.reset();
	// }

    return (
        <>  
            <h1>Add favorite songs</h1>
            {/* <form className="form_container" onSubmit={addNewSong}>
                <h2>Add a new song</h2>
                <input name="title" className="form_title" type="text" placeholder="Title" required/>
                <input name="artist" className="form_artist" type="text" placeholder="Artist" required/>
                <input name="price" className="form_price" type="number" placeholder="price" required/>
                <select name="style" className="form_style" required>
                    <option value="Rock">Rock</option>
                    <option value="Rnb">Rnb</option>
                    <option value="Slow">Slow</option>
                    <option value="Salegy">Salegy</option>
                </select>
                <textarea name="lyrics" cols="50" rows="5" className="form_lyrics" required />
                <button className="form_button" type="submit">Add</button>
            </form>   */}
        </>
    )
}

export default Add;