import React, { Component } from 'react';
import Header from "components/Header";
import StudentOverview from "components/StudentOverview";
import db from 'db';
import Ink from "react-ink";
import ArrowBack from 'assets/chevron_left.svg';
import ArrowForward from 'assets/chevron_right.svg';
import Add from 'assets/add.svg';
import "./styles.scss";
import AddStudentForm from 'components/AddStudentForm';

const studentsPerPage = 5;

class Students extends Component {
    state = {
        students: [],
        page: 0,
        isAdding: false,
    };

    componentDidMount() {
        this.updateStudents();
    }

    updateStudents = () => {
        db.queryLimitNOffsetM(studentsPerPage, this.state.page*5)
            .then(response => {
                this.setState({ students: response.rows });
            });
    }

    deleteStudent = uuid => {
        const { students } = this.state;
        this.setState({ students: students.filter(x => x.uuid !== uuid) })
        this.updateStudents();
    }

    incrementPage = () => {
        const { page } = this.state;
        db.queryLimitNOffsetM(studentsPerPage, (page+1)*5)
            .then(response => {
                if (response.rows !== undefined && response.rows.length !== 0) {
                  this.setState({ students: response.rows, page: page + 1 });
                }
            });
    }

    decrementPage = () => {
        const { page } = this.state;
        if (page-1 >= 0) {
            db.queryLimitNOffsetM(studentsPerPage, (page-1)*5)
                .then(response => {
                    this.setState({ students: response.rows, page: page - 1 });
                });
        }
    }

    addStudent = (student) => {
        db.insert(
          student.first,
          student.last,
          student.volunteer_hours,
          student.grade,
          student.student_id,
          student.community_service_award
        );
        this.closeAddStudent();
        this.updateStudents();
    }

    closeAddStudent = () => {
        this.setState({ isAdding: false });
    }

    render() {
        const { isAdding } = this.state;
        return (
          <React.Fragment>
            <Header active="Students" />
            <AddStudentForm
              showing={isAdding}
              addStudent={this.addStudent}
              onClose={this.closeAddStudent}
            />
            <div className="page-nav">
              <div
                title="Last page"
                className="icon-container"
                tabIndex={0}
                onClick={this.decrementPage}
              >
                <img
                  src={ArrowBack}
                  className="arrow arrow-back"
                  alt="back arrow"
                ></img>
                <Ink duration={400} />
              </div>
              <div
                title="Add student"
                className="icon-container"
                tabIndex={0}
                onClick={() => this.setState({ isAdding: true })}
              >
                <img src={Add} className="" alt="add student" />
                <Ink duration={400} />
              </div>
              <div
                title="Next page"
                className="icon-container"
                tabIndex={0}
                onClick={this.incrementPage}
              >
                <img
                  src={ArrowForward}
                  className="arrow arrow-forward"
                  alt="foward arrow"
                />
                <Ink duration={400} />
              </div>
              <div>Page {this.state.page + 1}</div>
            </div>
            {this.state.students.map(el => (
              <StudentOverview
                onDeleteStudent={this.deleteStudent}
                key={el.uuid}
                student={el}
              />
            ))}
          </React.Fragment>
        );
    }
}

export default Students;
