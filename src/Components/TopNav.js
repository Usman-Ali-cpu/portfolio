import { useState } from "react";
import React from "react";
import Logo from '../image.png';
import './TopNav.css';


const TopNav = () => {
    return (
        <div className="topnav">
            <div>
                <a href="#">
                    <img className="logo-img" src={Logo} alt="logo"/> 
                </a>
            </div>
            <div className="topnav-div1">
                <a className="nav-link" href="#about"> 
                    <span className="nav-link-hightlight-text">01.</span> 
                    <span className="nav-link-text">About</span> 
                </a>
                <a className="nav-link" href="#experience"> 
                    <span className="nav-link-hightlight-text"> 02.</span> 
                    <span className="nav-link-text">Experience</span> 
                </a>
                <a className="nav-link" href="#projects"> 
                    <span className="nav-link-hightlight-text">03.</span> 
                    <span className="nav-link-text">Projects</span> 
                </a>
                <a className="nav-link" href="#contact"> 
                    <span className="nav-link-hightlight-text">04.</span> 
                    <span className="nav-link-text">Contact</span> 
                </a>
                <div className="nav-btn-div">
                    <a href="#" className="primary-button">Resume</a>
                </div>
            </div>
        </div>
    )
}

export default TopNav;
// #37DBB2
// #64ffda
