import React, { Component } from 'react'
import ProfilePageHeader from './ProfilePageHeader'
import SetProfileForm from './SetProfileForm'

class SetProfilePage extends Component {
    render() {
        return (
            <div>
                <ProfilePageHeader />
                <SetProfileForm />
            </div>
        )
    }
}

export default SetProfilePage
