// To Make Javascript Accept JSX (JavaScript HTML)
import React from "https://raw.githubusercontent.com/EasiFyre/easifyre.github.io/main/Modules/react.js";

// The Component
const MainMoreButton = (props) => {
    
    let ColorBG = {backgroundColor: props.Content.CardButtonColor}
    
    return(
        <button onClick={More} className="MainMoreButton" style={ColorBG}> More </button>
    )
}

function More(){
    console.log('More')
}

// Exporting The Component
export default MainMoreButton;
