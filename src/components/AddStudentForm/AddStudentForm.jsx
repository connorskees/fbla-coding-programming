import React, { Component } from 'react';
import Close from "assets/close.svg";
import Ink from "react-ink";
import "./styles.scss";

// Characters that can lead to XSS or SQLi or interfere with our
// serialization. This should be read as a regex
const illegalCharacters = "[^<>(){}'\",\t\n\r]+"

class AddStudentForm extends Component {
    state = {
        first: "",
        last: "",
        volunteer_hours: "",
        grade: 9,
        student_id: "",
        community_service_award: "Community",
    };

    updateFirst = (event) => {
        this.setState({ first: event.target.value })
    }

    updateLast = (event) => {
        this.setState({ last: event.target.value })
    }

    updateHours = (event) => {
        const { value } = event.target;
        if (value < 0) return;
        this.setState({ volunteer_hours: value })
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

    addStudent = () => {
        this.props.addStudent(this.state)
        this.setState({
            first: "",
            last: "",
            volunteer_hours: "",
            grade: 9,
            student_id: "",
            community_service_award: "Community",
        });
    }

    render() {
        // assumes style is a valid "CSS in JS" style object
        // studentUUID is primary key of student, to propagate data from db
        const { style } = this.props;
        const display = this.props.showing ? "block" : "none";
        const { first, last, volunteer_hours, grade, student_id, community_service_award } = this.state;
        return (
          <React.Fragment>
            <div className="background" style={{ display }}></div>
            <form
              className="add-student-form"
              style={{ ...style, display }}
              onSubmit={e => {
                e.preventDefault();
                e.stopPropagation();
                this.addStudent();
              }}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  this.addStudent();
                }
              }}
            >
              <div className="row row-1">
                <label htmlFor="first">
                  First
                  <input
                    required
                    onChange={this.updateFirst}
                    value={first}
                    pattern={illegalCharacters}
                    type="text"
                    id="first"
                  />
                </label>

                <label htmlFor="last">
                  Last
                  <input
                    required
                    onChange={this.updateLast}
                    value={last}
                    pattern={illegalCharacters}
                    type="text"
                    id="last"
                  />
                </label>
              </div>

              <div className="row row-2">
                <label htmlFor="hours">
                  Volunteer Hours
                  <input
                    required
                    min={0}
                    max={365 * 24}
                    onChange={this.updateHours}
                    value={volunteer_hours}
                    pattern={illegalCharacters}
                    type="number"
                    id="hours"
                  />
                </label>

                <label htmlFor="grade">
                  Grade
                  <select
                    required
                    onChange={this.updateGrade}
                    value={grade}
                    id="grade"
                  >
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                  </select>
                </label>

                <label htmlFor="student-id">
                  Student ID
                  <input
                    required
                    onChange={this.updateStudentID}
                    value={student_id}
                    pattern={illegalCharacters}
                    type="text"
                    id="student-id"
                  />
                </label>
              </div>

              <div className="row row-3">
                <label htmlFor="award">
                  Community Service Award
                  <select
                    onChange={this.updateCommunityServiceAward}
                    value={community_service_award}
                    id="award"
                  >
                    <option value={"Community"}>Community</option>
                    <option value={"Service"}>Service</option>
                    <option value={"Achievement"}>Achievement</option>
                  </select>
                </label>
              </div>

              <div
                title="Close"
                className="close"
                tabIndex={0}
                onClick={this.props.onClose}
              >
                <img
                  src={Close}
                  className=""
                  alt="close"
                ></img>
                <Ink duration={400} />
              </div>

              <button type="submit" className="update">
                Add Student
              </button>
            </form>
          </React.Fragment>
        );
    }
}

export default AddStudentForm;
