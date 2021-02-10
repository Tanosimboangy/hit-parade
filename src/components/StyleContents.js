// import React, { useContext } from "react";
// import headset from "../img/headset.svg";
// import { useParams, Link } from 'react-router-dom';
// import { Context } from "../Context";

// function StyleContents() {
//     const { name } = useParams();
//     const { allSongs } = useContext(Context);
//     const newSongs = allSongs.filter(item => item.style === name);
//     const newSong = newSongs.map(items => {
//         return (
//                 <Link to={`/song/${items.id}`}>
//                     <ul key={items.id} className="styles">
//                         <li><h3>{items.title}</h3></li>
//                         <li><p>{items.artist}</p></li>
//                     </ul>
//                 </Link>
//         )
//     } )

//     return (
//         <div className="style">
//             <h2 className="styles_heading"><img src={headset} alt="headset"/>{name}</h2>
//             {newSong}
//         </div>
//     )
// }

// export default StyleContents
