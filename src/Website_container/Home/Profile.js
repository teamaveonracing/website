import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile(){
    return (
        <div className='profile_container'>
                    <div className='fixed'>
                            <span className='primary-text'></span>
                            {" "}
                            Welcome to <span className='highlighted-text'><br></br></span>
                        </div>
                <div className='scroll'>
                    <h1>
                        {" "}
                        <Typical 
                        wrapper='b'
                        steps={[
                            "Team Aveon Racing!",
                            1000,
                            "Team Aveon Racing!",
                            1000,
                            ]}
                            loop={Infinity}
                        />
                    </h1>
                    <span className='profile-role-tagline'>
                        Steering Innovation!
                    </span>
                </div>
                <div id="about">ABOUT US</div>
                <p>
                Team Aveon Racing consists of 25 members from different disciplines who come together to design and fabricate an Electric all-terrain vehicle and participate in the national level event, e-BAJA. Designing, fabrication, assemble and testing - all kinds of work are done by the students with an aim to build a lighter, faster and more durable ATV with zero emissions. The team was established in 2016 with the sole purpose of utilising technical knowledge and inspiring research for manufacture of alternate energy automobiles. The team started off as one of the best debutants and secured fifth rank in just its third year at the competition
                </p>
                </div>
    )
}
