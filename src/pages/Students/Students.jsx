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
            .then((response) => {
                this.setState({ students: response.rows });
            });
    }

    render() {
        return (
            <React.Fragment>
                <Header active="Students" />
                {
                    this.state.students.map(
                        el => <StudentOverview key={el.uuid} student={el}/>
                    )
                }
            </React.Fragment>
        );
    }
}

export default Students;
