import React from "react";
import './Sidebar.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPageIcon from '@mui/icons-material/ContactPage';


const Sidebar = () => {
    return (
        <>
            <div className="right-sidebar">
                <div className="email-div">
                    <a href="mailto:py.usman.ali@gmail.com" className="sidebar-email" > py.usman.ali@gmail.com  </a>
                </div>
                <hr style={{height: '100px', background: '#a8b2d1' }}></hr>
            </div>  
            <div className="left-sidebar">
                <div className="icons-div">
                    <div className="left-icons">
                        <a href="#"> <GitHubIcon sx={{ color: "#a8b2d1"  }} /> </a>
                        <a href="#"> <LinkedInIcon sx={{ color: "#a8b2d1"  }} /> </a>
                        <a href="#"> <InstagramIcon sx={{ color: "#a8b2d1"  }} /> </a>
                        <a href="#"> <ContactPageIcon sx={{ color: "#a8b2d1"  }}/> </a>
                    </div>
                    <hr style={{height: '100px', background: '#a8b2d1' }}></hr>
                </div>
            </div>
        </>
       

    )
}

export default Sidebar;
