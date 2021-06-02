import React from "https://raw.githubusercontent.com/EasiFyre/easifyre.github.io/main/Modules/react.js"
import ReactDOM from "https://raw.githubusercontent.com/EasiFyre/easifyre.github.io/main/Modules/react-dom.js"
import MainApp from "./ReactComponents/MainApp" 

import CardVariables from "./ReactComponents/MainAppComponents/Variables"

ReactDOM.render(
    <div>
        <MainApp />
        <MainApp />
    </div>,
    document.getElementById('Root')
)
