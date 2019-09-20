import React, { Component } from 'react';
import Header from "components/Header";
import StudentOverview from "components/Header";
import "./styles.scss";

class Students extends Component {
    state = {};

    render() {
        return (
            <React.Fragment>
                <Header active="Students" />
                <StudentOverview first={"George"} last={"Bush"} hours={25}/>
            </React.Fragment>
        );
    }
}

export default Students;
