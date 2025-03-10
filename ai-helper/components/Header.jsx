import React from "react";

const Header = (props) => {
    const currentDate = new Date();

    return (
        <div>
            <h1>AI Helper</h1>
            <p> {currentDate} </p>
        </div>
    );
}

export default Header;