import React from "react";
import './Header.css';


const Header = () => {
    return (
        <div className="header-container">
            <h5 className="header-para1">Hi, my name is</h5>
            <p className="header-para2">Usman Ali.</p>
            <p className="header-para3">I build things for web</p>
            <p className="header-para4">I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
                Currently, I'm focused on building accessible, human-centered products at Codefulcrum.
            </p>
            <a href="#" className="primary-button">Check out my resume!</a>
        </div>
    )
}

export default Header;
