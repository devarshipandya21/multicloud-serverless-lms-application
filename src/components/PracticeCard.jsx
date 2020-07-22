import React, { Component } from 'react'
import '../stylesheets/PracticeCardStyle.css'
import pro from '../images/pro-icon.png'
import emptystate from '../images/empty-state-1.jpg'

class PracticeCard extends Component {
    render() {
        return (
            <div>
                <p className="font-weight-bold text-left margin-left: 1rem" style={{ position: "relative", top: "0.5rem", fontSize: "1.5rem", marginLeft: "0rem" }}>Practice
                <span><img className="img-fluid" src={pro} alt="pro" width="55px" /></span>
                </p>
                <div className="card text-left practicestyle">
                    <div className="card-body text-dark">
                        <img src={emptystate} className="img-fluid" alt="empty" width="250px" style={{display: "block", marginLeft: "auto", marginRight: "auto"}}/>
                        <h5 className="card-title text-center">Nothing to practice yet</h5>
                        <p className="card-text text-center">
                            As you learn, we will recommend<br />
                            concepts to review.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PracticeCard
