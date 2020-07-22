import React, { Component } from 'react'
import '.././stylesheets/CourseCardStyle.css'
import CourseProgress from './CourseProgress'


class CourseCard extends Component {
    render() {
        return (
            <div className="card text-center shadow coursecard">
                <div className="overflow">
                    <img src={this.props.imgsrc} alt="img" className="card-img-top"></img>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{this.props.coursename}</h4>
                    <p className="card-text text-secondary text-left">
                        Approximate Course Length: 48 hours
                        Instructor: Dr. Saurabh Dey
                    </p>
                    <CourseProgress prgval="25" />
                    <a href="#" className="btn btn-outline-success">Resume Course</a>
                </div>
            </div>
        )
    }
}

export default CourseCard
