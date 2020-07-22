import React, { Component } from 'react'
import '../stylesheets/GoPremiumStyle.css'
import premium from '../images/premium.png'
import pro from '../images/pro-icon.png'

class GoPremium extends Component {
    render() {
        return (
            <div className="card text-left shadow gopremiumstyle">
                <div className="card-body text-dark">
                    <h4 className="card-title"><img src={premium} className="img-fluid" alt="premium" width="32px" /> Go Premium - Try StackLearner
                    <span><img src={pro} alt="PRO" className="img-fluid" width="55px"/></span>
                    </h4>
                    <p className="card-text text-left">
                        Enjoy unlimited learning, practice materials, and other premium features.
                </p>
                    <a href="#" className="freelink font-weight-bold">Try it for free</a>
                </div>
            </div>
        )
    }
}

export default GoPremium
