// To Make Javascript Accept JSX (JavaScript HTML)
import React from "https://raw.githubusercontent.com/EasiFyre/easifyre.github.io/main/Modules/react.js"

// To Render Each Component In This Component
import MovieName from "./MainDivComponents/MovieName.js"
import MovieSpecifics from "./MainDivComponents/MovieSpecifics.js"
import MainMoreButton from "./MainDivComponents/MainMoreButton.js"
import MainWatchButton from "./MainDivComponents/MainWatchButton.js"
import Poster from "./MainDivComponents/Poster.js"


// The Specificatations Of The Cards
import CardVariables from "./Variables"

// The Poster's Location
let ImgSrc = CardVariables.MoviePoster;

// The Component
const MainDiv = (props) => {
    return(
        <div className="GreyDiv">
            <Poster Content= {props.CardVariable} />
            <div className="InnerDiv">
                <MainWatchButton Content= {props.CardVariable} />
                <MainMoreButton Content= {props.CardVariable} />
                <MovieName Content= {props.CardVariable} />
                <MovieSpecifics Content= {props.CardVariable} />
                {/*
                <MovieName Content= {props.CardVariable} />
                <MovieSpecifics Content= {props.CardVariable} />
                <MainMoreButton Content= {props.CardVariable} />
                <MainWatchButton Content= {props.CardVariable} />
                */}
            </div>
        </div>
    )
}

// Exporting The Component
export default MainDiv;
