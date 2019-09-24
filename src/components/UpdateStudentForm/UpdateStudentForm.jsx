import React, { Component } from 'react';
import "./styles.scss";

// Characters that can lead to XSS or SQLi
const illegalCharacters = "[^<>(){}'\"]+"

class UpdateStudentForm extends Component {
    state = {
        ...this.props.student,
    };

    updateFirst = (event) => {
        this.setState({ first: event.target.value })
    }

    updateLast = (event) => {
        this.setState({ last: event.target.value })
    }

    updateHours = (event) => {
        this.setState({ volunteer_hours: event.target.value })
    }

    updateGrade = (event) => {
        this.setState({ grade: event.target.value })
    }

    updateStudentID = (event) => {
        this.setState({ student_id: event.target.value })
    }

    updateCommunityServiceAward = (event) => {
        this.setState({ community_service_award: event.target.value })
    }

    onSubmit = () => {

    }
    

    render() {
        // assumes style is a valid "CSS in JS" style object
        // studentUUID is primary key of student, to propagate data from db
        const { style } = this.props;
        const { first, last, volunteer_hours, grade, student_id, community_service_award } = this.state;
        return (
            <form className="update-student-form" style={style}
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.props.onSubmit(this.state);
                }}
                onKeyDown={
                    (e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            this.props.onSubmit(this.state);
                        }
                    }
                }
            >
                <div className="row row-1">
                    <label htmlFor="first">
                        First
                        <input required onChange={this.updateFirst} value={first} pattern={ illegalCharacters } type="text" id="first" />
                    </label>

                    <label htmlFor="last">
                        Last
                        <input required onChange={this.updateLast} value={last} pattern={ illegalCharacters } type="text" id="last" />
                    </label>
                </div>

                <div className="row row-2">
                    <label htmlFor="hours">
                        Volunteer Hours
                        <input required onChange={this.updateHours} value={volunteer_hours} pattern={ illegalCharacters } type="number" id="hours" />
                    </label>

                    <label htmlFor="grade">
                        Grade
                        <select required onChange={this.updateGrade} value={grade} id="grade">
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                        </select>
                    </label>

                    <label htmlFor="student-id">
                        Student ID
                        <input required onChange={this.updateStudentID} value={student_id} pattern={ illegalCharacters } type="text" id="student-id" />
                    </label>
                </div>

                <div className="row row-3">
                    <label htmlFor="award">
                        Community Service Award
                        <select onChange={this.updateCommunityServiceAward} value={community_service_award} id="award">
                            <option value={"Community"}>Community</option>
                            <option value={"Service"}>Service</option>
                            <option value={"Achievement"}>Achievement</option>
                        </select>
                    </label>
                </div>

                <button type="submit" className="update">Update</button>
            </form>
        );
    }
}

export default UpdateStudentForm;
