import React, { Component } from 'react';
import "./styles.scss";

// Characters that can lead to XSS or SQLi
const illegalCharacters = "[^<>(){}'\"]+"

class UpdateStudentForm extends Component {
    state = {};

    render() {
        // assumes style is a valid "CSS in JS" style object
        // studentUUID is primary key of student, to propagate data from db
        const { style, studentUUID } = this.props;
        return (
            <form className="update-student-form" style={style}>
                <div className="row row-1">
                    <label htmlFor="first">
                        First
                        <input required pattern={ illegalCharacters } type="text" id="first" />
                    </label>

                    <label htmlFor="last">
                        Last
                        <input required pattern={ illegalCharacters } type="text" id="last" />
                    </label>
                </div>

                <div className="row row-2">
                    <label htmlFor="hours">
                        Volunteer Hours
                        <input required pattern={ illegalCharacters } type="number" id="hours" />
                    </label>

                    <label htmlFor="grade">
                        Grade
                        <select required id="grade">
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </label>

                    <label htmlFor="student-id">
                        Student ID
                        <input required pattern={ illegalCharacters } type="text" id="student-id" />
                    </label>
                </div>

                <div className="row row-3">
                    <label htmlFor="award">
                        Community Service Award
                        <select id="award">
                            <option>Community</option>
                            <option>Service</option>
                            <option>Achievement</option>
                        </select>
                    </label>
                </div>

                <button type="submit" className="update">Update</button>
            </form>
        );
    }
}

export default UpdateStudentForm;
