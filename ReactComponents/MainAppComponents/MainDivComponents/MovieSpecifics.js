// To Make Javascript Accept JSX (JavaScript HTML)
import React from "https://raw.githubusercontent.com/EasiFyre/easifyre.github.io/main/Modules/react.js";

// The Component
const MovieSpecifics = (props) => {
    return (
        <p className="MovieSpecifics"> {props.Content.MovieType} • {props.Content.MovieYear} • {props.Content.MovieAgeRating} </p>
    )
}

// Exporting The Component
export default MovieSpecifics;
