import React, { useState, useEffect } from "react";

function Header() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);//update every second

        return() => clearInterval(intervalID);
    }, []);


    return (
        <div>
            <h1>AI Helper</h1>
            <p> Current Date: {currentDate.toLocaleDateString()} </p>
        </div>
    );
}

export default Header;