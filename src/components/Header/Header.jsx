import React, { Component } from 'react';
import "./styles.scss";

class Header extends Component {
    state = {};

    render() {
        return (
            <nav>
                <h1>uda</h1>
                <div className="nav-wrapper">
                    <div className="nav-item">Home</div>
                    <div className="nav-item">Students</div>
                    <div className="nav-item">Generate Report</div>
                </div>
            </nav>
        );
    }
}

export default Header;
