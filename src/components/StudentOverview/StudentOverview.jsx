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
        return (
            <div className="overview-wrapper">
                <div className="overview-text-wrapper">
                    <div className="name-wrapper">
                        <span className="name">
                            Alex Jones
                        </span>
                        <div>
                            <span className="hours">
                                25
                            </span>
                            <span className="hours-label">
                                hours
                            </span>
                        </div>
                    </div>
                    <div className="bar-wrapper">
                        <div className="bar" style={{ width: `${Math.min(Math.ceil((25 / 200) * 100), 100)}%` }} />
                    </div>
                    <div className="icon-bar-wrapper">
                        <div className="edit-icon" onClick={ this.toggleIsEditing } />
                        <div className="delete-icon" />
                    </div>
                </div>
                <UpdateStudentForm style={{ marginTop: "20px", display: isEditing ? "block" : "none" }}/>
            </div>
        );
    }
}

export default StudentOverview;
