import React from 'react'
import complogo from './logo.png'
export default function Nav(){
    return (
        <div>
            <nav className="navbar navbar-expand-sm">
                <div className="logo"><img src={complogo} alt='logo'/></div>
                 <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
                     <ul className="navbar-nav ml-auto">
                        <li className="nav-item "><a className ="nav-link" href="#about">About Us</a></li>
                     <li className="nav-item "><a className ="nav-link" href="#content">Cars</a></li>
                        <li className="nav-item "><a className ="nav-link" href="#sponsor">Sponsor Us</a></li>
                        <li className="nav-item "><a className ="nav-link" href="#events">Events</a></li>
                        <li className="nav-item "><a className ="nav-link" href="#contact">Contact Us</a></li>
                    </ul>
                </div>
            </nav>  
         </div>
    )
}
