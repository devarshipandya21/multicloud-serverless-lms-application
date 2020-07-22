import React, { Component } from 'react'
import google_icon from '.././images/google-icon.png'
import fb_icon from '.././images/facebook-icon.png'
import linkedin_icon from '.././images/linkedin-icon.png'
import github_icon from '.././images/github-icon.png'
import { Link } from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            emailErrorMsg: ""
        }

    }

    validateEmail = (email) => {
        if (email.length === 0) {
            return ("")
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return ("")
        }
        return ("Enter a valid email address.")
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
            emailErrorMsg: this.validateEmail(event.target.value)
        })
    }

    handlePassChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <div className="container col-md-5 col-sm-6 col-xs-12" align="left" style={{position: "relative", top: "10rem"}}>
                <h4 className="h4">Log In to DALServerlessLMS</h4>
                <br />
                <form className="form-group">
                    <div className="row">
                        <div className="col-md-12">
                            <label className="label label-default font-weight-bold">Email</label>
                        </div>
                        <div className="col-md-12">
                            <input type="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange}></input>
                            <small className="text-danger">{this.state.emailErrorMsg}</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label className="label label-default font-weight-bold">Password</label>
                        </div>
                        <div className="col-md-12">
                            <input type="password" className="form-control" value={this.state.password} onChange={this.handlePassChange}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-2">
                            <a href="#" className="text-muted font-weight-bold">Forgot password?</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <Link to="/student-dashboard">
                                <input type="submit" className="btn btn-primary w-100" style={{ height: "3rem", fontSize: "1.25rem" }} value="Log in"></input>
                            </Link>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col-md-12">
                        <p className="font-weight-bold">Login with another account</p>
                    </div>
                </div>
                <div className="row" style={{ width: "16rem" }}>
                    <button className="btn btn-default col col-xs-4"><img src={google_icon} className="img-fluid" /></button>
                    <button className="btn btn-default col col-xs-4"><img src={fb_icon} className="img-fluid" /></button>
                    <button className="btn btn-default col col-xs-4"><img src={linkedin_icon} className="img-fluid" /></button>
                    <button className="btn btn-default col col-xs-4"><img src={github_icon} className="img-fluid" /></button>
                </div>
            </div>
        )
    }

}

export default Login



