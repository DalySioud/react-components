import React from 'react'
import Profile from './daly.jpg'
function ProfilePhoto() {
    const mystyle = {
        width :"50%",
        height:"auto"
    }
    return (
        <div>
            <img src={Profile} style={mystyle} alt='Daly'/>
        </div>
    )
}

export default ProfilePhoto
