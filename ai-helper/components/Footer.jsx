import React from "react";

function Footer() {

    return (
        <div className="footer">
            <a href="https://github.com/chingu-voyages/V54-tier1-team-02" target="_blank">GitHub Repo</a>

            <ul>
                <li>JD, Product Owner</li>    
            </ul>
            <ul>
                <li>Ronysha, Scrum Master</li>
                <li>Chyna, Scrum Master</li>
            </ul>
            <ul className="dev">
                <li>Brandi, Developer</li>
                <li>Stephanie, Developer</li>
                <li>Alison, Developer</li>
                <li>Sarah, Developer</li>
            </ul>
        </div>
    );
}

export default Footer;