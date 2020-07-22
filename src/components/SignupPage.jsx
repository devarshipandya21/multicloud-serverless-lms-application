import React, { Component } from 'react'
import signupimage from ".././images/signup_image.png"
import Signup from './Signup'
import google_icon from "../images/google-icon.png";
import fb_icon from "../images/facebook-icon.png";
import linkedin_icon from "../images/linkedin-icon.png";
import github_icon from "../images/github-icon.png";

export class SignupPage extends Component {
    render() {
        return (
            <div className="m-0">
                <div className="row justify-content-around">

                    <div className="col-md-4 col-sm-12">
                        <img src={signupimage} width="500px" className="img-fluid" style={{ position: "relative", top: "5rem" }}></img>
                    </div>
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4 col-sm-12 align-self-center">
                        <Signup from="SignupPage" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupPage
