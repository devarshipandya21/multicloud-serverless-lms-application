import React, { Component } from 'react'
import '../stylesheets/ModuleHeadingBarStyle.css'

class ModuleHeadingBar extends Component {
    render() {
        return (
            <div className="headingbar">
                <div className="headingbarcontent">
                    <img src={this.props.img} alt="icon" className="img-fluid" width="25px" style={{ marginLeft: "1rem" }} />
                        <span className="headingbartext">{this.props.txt}</span>
                </div>
            </div>
        )
    }
}

export default ModuleHeadingBar
