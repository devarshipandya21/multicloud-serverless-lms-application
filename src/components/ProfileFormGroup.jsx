import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProfileFormGroup extends Component {
    render() {
        return (
            <div className="col-md-4" style={{ margin: "0 auto", top: "6rem", marginBottom: "3rem" }}>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-5 text-left justify-content-center">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>
                        <div className="form-group col-md- text-left">
                            <label>Last name</label>
                            <input type="password" className="form-control" placeholder="Last name" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-7 text-left">
                            <label>Highest level of education</label>
                            <select className="form-control">
                                <option></option>
                                <option>No formal education</option>
                                <option>High School</option>
                                <option>Bachelor's Degree</option>
                                <option>Master's Degree</option>
                                <option>Vocational Qualification</option>
                                <option>Doctorate or higher</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group text-left">
                        <label>Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="form-group text-left">
                        <label>Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment #" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3 text-left">
                            <label>City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-7 text-left">
                            <label>Province</label>
                            <select className="form-control">
                                <option></option>
                                <option>Alberta</option>
                                <option>British Columbia</option>
                                <option>Manitoba</option>
                                <option>New Brunswick</option>
                                <option>Newfoundland and Labrador</option>
                                <option>Nova Scotia</option>
                                <option>Ontario</option>
                                <option value="">Prince Edward Island</option>
                                <option value="">Quebec</option>
                                <option value="">Saskatchewan</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2 text-left">
                            <label>Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <Link to="/login">
                        <button type="submit" className="btn btn-primary">Sign up</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default ProfileFormGroup
