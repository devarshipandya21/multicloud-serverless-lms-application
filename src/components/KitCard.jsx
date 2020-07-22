import React, { Component } from 'react'
import '../stylesheets/KitCardStyle.css'

class KitCard extends Component {
    render() {
        return (
            <div className="card shadow kitcardcontainer" style={{ backgroundColor: this.props.bgcolor }}>
                <img src={this.props.img} alt="illustration" className="img-fluid" width="100 px" style={{ display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "1.5rem" }} />
                <div className="card-body text-dark kitcard">
                    <h5 className="card-title" style={{ color: "white", marginTop: "0rem" }}>{this.props.txt}</h5>
                </div>
            </div>
        )
    }
}

export default KitCard
