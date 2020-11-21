import React from "react";

function Add() {

    

    return (
        <>  
            <form className="form_container">
                <h2>Add a new song</h2>
                <input className="form_title" type="text" placeholder="Title" required/>
                <input className="form_artist" type="text" placeholder="Artist" required/>
                <input className="form_price" type="number" placeholder="price" required/>
                <select className="form_style" required>
                    <option value="Salegy">Salegy</option>
                    <option value="Reggae">Reggae</option>
                    <option value="Folk">Folk</option>
                    <option value="Rap">Rap</option>
                    <option value="Rock">Rock</option>
                </select>
                <textarea cols="50" rows="5" className="form_lyrics" required />
                <button className="form_button" type="submit">Add</button>
            </form>  
        </>
    )
}

export default Add;