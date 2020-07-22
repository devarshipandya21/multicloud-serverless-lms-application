import React, { Component } from 'react'
import '../stylesheets/LessonBarStyle.css'
import lessonicon from '../images/lesson-icon.png'
import { Link } from 'react-router-dom'

class LessonBar extends Component {
    render() {
        return (
            <div className="container p-0 flex-wrap">
                <div className="row lessonbar">
                    <div className="col-md-2 col-xs-1">
                        <img src={lessonicon} className="img-fluid" alt="icon" width="30px" style={{ marginLeft: "0rem" }} />
                    </div>

                    <div className="col-md-5 col-xs-5">
                        <span className="lessontext">Lesson</span>
                    </div>
                    <div className="col-md-5 col-xs-5">
                        <Link to="/course-page">
                            <span className="lessontext">Lorem ipsum dolor sit</span>
                        </Link>
                    </div>

                </div>
            </div>

        )
    }
}

export default LessonBar
