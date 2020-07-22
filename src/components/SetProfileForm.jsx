import React, { Component } from 'react'
import profilepicture from '../images/profile-picture.png'
import '../stylesheets/ProfileFormStyle.css'
import ProfileFormGroup from './ProfileFormGroup'

class SetProfileForm extends Component {
    render() {
        return (
            <div className="flex-wrap">
                <img src={profilepicture} alt="profileimg" width="150px" className="profileimg" />
                <p className="lead setprofiletext">Set profile picture</p>
                <ProfileFormGroup/>
            </div>
        )
    }
}

export default SetProfileForm
