import React, { Component } from 'react';
import "./styles.scss";

// Characters that can lead to XSS or SQLi 
const illegalCharacters = "[^<>(){}'\"]+"

class UpdateStudentForm extends Component {
    state = {};

    render() {
        return (
            <form>
                <div className="row row-1">
                    <label for="first">
                        First
                        <input required pattern={ illegalCharacters } type="text" id="first" />
                    </label>

                    <label for="last">
                        Last
                        <input required pattern={ illegalCharacters } type="text" id="last" />
                    </label>
                </div>

                <div className="row row-2">
                    <label for="hours">
                        Volunteer Hours
                        <input required pattern={ illegalCharacters } type="number" id="hours" />
                    </label>

                    <label for="grade">
                        Grade
                        <select required id="grade">
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </label>

                    <label for="student-id">
                        Student ID
                        <input required pattern={ illegalCharacters } type="text" id="student-id" />
                    </label>
                </div>

                <div className="row row-3">
                    <label for="award">
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
