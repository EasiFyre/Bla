// To Make Javascript Accept JSX (JavaScript HTML)
import React from "https://raw.githubusercontent.com/EasiFyre/easifyre.github.io/main/Modules/react.js"

import AllCards from "./Variables"

// To Render Each Component In This Component
import MainDiv from "./MainAppComponents/MainDiv"
import MainClock from "./MainAppComponents/OtherComponents/MainClock"

// The Component
const MainApp = () => {
    return(
        <div>
            <MainDiv CardVariable={AllCards.UpVariables} />
            <MainDiv CardVariable={AllCards.BlackPantherVariables} />
            <MainDiv CardVariable={AllCards.ToyStory4Variables} />
            <MainClock />
        </div>
    )
}

// Exporting The Component
export default MainApp
