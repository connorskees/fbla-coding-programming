import React, { Component } from 'react';
import UpdateStudentForm from 'components/UpdateStudentForm';
import "./styles.scss";

class StudentOverview extends Component {
    state = {
        // whether or not to show edit info form
        isEditing: false
    };

    toggleIsEditing = () => {
        const { isEditing } = this.state;
        this.setState({ isEditing: !isEditing });
    }

    render() {
        const { first, last, hours } = this.props;
        const { isEditing } = this.state;
        // we add .1 here as the maximum value because the bar does not look completely filled at 100
        const barWidth = Math.min(Math.ceil((hours / 200) * 100), 100) + .1;
        return (
            <div className="overview-wrapper">
                <div className="overview-text-wrapper">
                    <div className="name-wrapper">
                        <span className="name">
                            { first } { last }
                        </span>
                        <div>
                            <span className="hours">
                                { hours }
                            </span>
                            <span className="hours-label">
                                hours
                            </span>
                        </div>
                    </div>
                    <div className="bar-wrapper">
                        {/*
                            A separate div has to be used here as the bar because
                            you cannot dynamically style pseudoelements using
                            Javascript
                        */}
                        <div className="bar" style={{ width: `${barWidth}%` }} />
                    </div>
                    <div className="icon-wrapper">
                        {/* TODO: enter when focused */}
                        <div tabIndex={0} className="edit-icon" onClick={ this.toggleIsEditing } />
                    </div>
                    <div className="icon-wrapper">
                        <div tabIndex={0} className="delete-icon" />
                    </div>
                </div>
                <UpdateStudentForm style={{ marginTop: "20px", display: isEditing ? "block" : "none" }}/>
            </div>
        );
    }
}

export default StudentOverview;
