import React from "react"
import ReactDOM from "react-dom"
import MainApp from "./ReactComponents/MainApp" 

import CardVariables from "./ReactComponents/MainAppComponents/Variables"

ReactDOM.render(
    <div>
        <MainApp />
        <MainApp />
    </div>,
    document.getElementById('Root')
)
