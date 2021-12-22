import React from 'react'
import complogo from './logo.png'
export default function Nav(){
    return (
        <div>
            <ul className="nav justify-content-end">
                <li>
                <a href="#" className="logo"><img src={complogo} /></a> 
                </li>
                 <li className="nav-item">
                     <a className="nav-link active" href="#">Events</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#content">Gallery</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                    </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact Us</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link" href="#">Articles</a>
                 </li>
            </ul>
        </div>
    )
}
