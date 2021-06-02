// To Make Javascript Accept JSX (JavaScript HTML)
import React from "react";

// The Component
const MovieSpecifics = (props) => {
    return (
        <p className="MovieSpecifics"> {props.Content.MovieType} • {props.Content.MovieYear} • {props.Content.MovieAgeRating} </p>
    )
}

// Exporting The Component
export default MovieSpecifics;
