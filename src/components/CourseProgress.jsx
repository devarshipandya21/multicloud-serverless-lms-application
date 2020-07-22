import React, { Component } from 'react'
import '.././stylesheets/ProgressBarStyle.css'

class CourseProgress extends Component {
    // setprgval = () => {
    //     document.getElementsByClassName('badge').style.display = "block";
    // }
    newStyle = {
        display: 'block'
    };
    showval = () => {
        document.getElementsByClassName('badge').style = this.newStyle;
        console.log('Mouse enter');
        // console.log(document.getElementsByClassName('badge'));
    }
    render() {
        return (
            <div>
                {/* <div className="badge badge-grey" style={{position: "relative", right: this.props.prgval + "%", display: "hidden"}}>{this.props.prgval}</div> */}
                <div className="progress" onMouseOver={this.showval}>
                    <div className="progress-bar bg-success" style={{ width: this.props.prgval + "%" }}></div>
                </div>
            </div>
        )
    }
}

export default CourseProgress
