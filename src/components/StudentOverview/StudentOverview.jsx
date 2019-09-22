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
        const barWidth = Math.min(Math.ceil((hours / 200) * 100), 100);
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
                    {/* 
                        We have to use a linear gradient to style the
                        inner bar because the other two options, pseudoelements
                        and a child element, wouldn't work. The former can't be
                        styled by CSS in JS, and the latter is hard to make work
                        at different screen sizes.
                     */}
                    <div
                        className="bar"
                        style={{ "background": `linear-gradient(to right, #1EB337 ${barWidth}%, #fff ${barWidth}%)` }}
                    />
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
