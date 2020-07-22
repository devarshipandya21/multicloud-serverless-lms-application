import React, { Component } from 'react'
import '../stylesheets/QuestionContainerStyle.css'
import QuestionContainerText from './QuestionContainerText'

class QuestionContainer extends Component {
    render() {
        return (
            <div className="sidebar-container col-md-4 col-sm-12 col-xs-12">
                <div className="sidebar-header">
                    Module 1
                    </div>
                <div className="sidebar">
                    <QuestionContainerText />
                </div>
            </div>
        )
    }
}

export default QuestionContainer
