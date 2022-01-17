import React from 'react'
import './Events.css'
import image from './images.jpg'
export default function Events () {
    return (
        <div>
            <div className='container'>
                <div id='events'>EVENTS</div>
                <p>SAE e-BAJA is a national level intercollegiate competition organised by the society of Automative Engineers in association with Mahindra. The event takes place in Pithampur and teams of students from colleges all across the nation participate with an electric, all-terrain vehicle that has been designed and fabricated by the students themselves.</p>
                  <div className='image'><img src={image} /></div>  
            </div>
        </div>
    )
}
