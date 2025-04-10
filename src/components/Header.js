import React from 'react';
import '../style.css';
import logo from "../images/running.jpeg"


function Header(){
    return(
        <header >
        <nav className="header" > 
            <img src={logo} className="header-logo" alt=''/>
            <ul className="header-list">
                <li>About Us</li>
                <li>Pricing</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    </header>

    )    
}

export default Header;