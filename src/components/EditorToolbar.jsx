import $ from 'jquery'
import 'bootstrap'
import React, { Component } from 'react'
import '../stylesheets/EditorToolbarStyle.css'


class EditorToolbar extends Component {
    componentDidMount() {
        $('[data-toggle="tooltip"]').tooltip();
    }

    componentDidUpdate() {
        $('[data-toggle="tooltip"]').tooltip();
    }
    render() {
        return (
            <div className="editortoolbar shadow col-md-5 p-0" align="left" style={{width: this.props.w}}>
                <button className="runbtn btn">RUN<i className="fa fa-play-circle" aria-hidden="true" style={{ marginLeft: "0.5rem" }}></i></button>
                <button className="resetbtn btn btn-dark rounded-0" data-toggle="tooltip" data-placement="top" title="Reset exercise">
                    <i class="fa fa-refresh" aria-hidden="true"></i>
                </button>
                <button  className="solbtn btn btn-dark ml-5 rounded-0">
                <i className="fa fa-lightbulb-o mr-2" aria-hidden="true"></i>
                View Solution
                </button>
            </div>
        )
    }
}

export default EditorToolbar
