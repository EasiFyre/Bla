// To Make Javascript Accept JSX (JavaScript HTML)
import React from "https://raw.githubusercontent.com/EasiFyre/easifyre.github.io/main/Modules/react.js";

// The Component
const MovieName = (props) => {
    return (
        <h1 className="MovieName"> {props.Content.MovieName} </h1>
    )
}

// Exporting The Component
export default MovieName;
