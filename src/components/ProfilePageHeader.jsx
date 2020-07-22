import React, { Component } from 'react'
import '../stylesheets/ProfilePageHeaderStyle.css'

class ProfilePageHeader extends Component {
    render() {
        return (
            <div className="pageheader jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">Just a step away</h1>
                    <p className="lead">Become a full-grown programmer!</p>
                </div>
            </div>
        )
    }
}

export default ProfilePageHeader
