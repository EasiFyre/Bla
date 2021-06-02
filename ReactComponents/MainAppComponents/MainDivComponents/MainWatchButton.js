// To Make Javascript Accept JSX (JavaScript HTML)
import React from "https://raw.githubusercontent.com/EasiFyre/easifyre.github.io/main/Modules/react.js"


// The Component
const MainWatchButton = (props) => {
    
    let ColorBG = {backgroundColor: props.Content.CardButtonColor}
    
    return(
        <button onClick={Watch} className="MainWatchButton" style={ColorBG}> Watch </button>
    )
}

// Just To Make Sure The Button Works
const Watch = () => {
    console.log("Watch")
}

// Exporting The Component
export default MainWatchButton;
