import React, { Component } from 'react';
import Header from "components/Header";
import StudentOverview from "components/StudentOverview";
import db from 'db';
import "./styles.scss";


class Students extends Component {
    state = {
        students: []
    };

    componentDidMount() {
        db.queryAll()
            .then(response => {
                this.setState({ students: response.rows });
            });
    }

    deleteStudent = uuid => {
        let { students } = this.state;
        this.setState({ students: students.filter(x => x.uuid !== uuid) })
    }

    render() {
        return (
            <React.Fragment>
                <Header active="Students" />
                {
                    this.state.students.map(
                        el => <StudentOverview onDeleteStudent={this.deleteStudent} key={el.uuid} student={el}/>
                    )
                }
            </React.Fragment>
        );
    }
}

export default Students;
