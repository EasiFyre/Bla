// To Make Javascript Accept JSX (JavaScript HTML)
import React from "react";

// The Component
const MovieName = (props) => {
    return (
        <h1 className="MovieName"> {props.Content.MovieName} </h1>
    )
}

// Exporting The Component
export default MovieName;
