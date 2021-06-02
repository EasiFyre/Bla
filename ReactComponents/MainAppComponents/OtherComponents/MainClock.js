// To Make Javascript Accept JSX (JavaScript HTML)
import React from "react"


const MainClock = () => {
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours() % 12;
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let milisecond = date.getMilliseconds();
    let dayName;
    
    if (day == 1){
        dayName = "Monday"
    }
    else if (day == 2){
        dayName = "Tuesday"
    }
    else if (day == 3){
        dayName = "Wednesday"
    }
    else if (day == 4){
        dayName = "Thursday"
    }
    else if (day == 5){
        dayName = "Friday"
    }
    else if (day == 6){
        dayName = "Saturday"
    }
    else if (day == 7){
        dayName = "Sunday"
    }
    
    let Time = dayName + " : " + hour + " : " + minute + " : " + second + " : " + milisecond
    
    return(
        <div className="MainClock">
            <p className="MainTime">{"Last Refreshed On: " + Time}</p>
        </div>
    )
}

export default MainClock
