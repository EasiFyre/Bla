import React from "./Modules/react.js"
import ReactDOM from "./Modules/react-dom.js"
import MainApp from "./ReactComponents/MainApp" 

import CardVariables from "./ReactComponents/MainAppComponents/Variables"

ReactDOM.render(
    <div>
        <MainApp />
        <MainApp />
    </div>,
    document.getElementById('Root')
)
