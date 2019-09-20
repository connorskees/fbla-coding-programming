import React, { Component } from 'react';
import Header from "components/Header";
import StudentOverview from "components/StudentOverview";
import "./styles.scss";

const testData = [
    {
        "student_id": 13321,
        "first": "Alex",
        "last": "Jones",
        "grade": 11,
        "hours": 25
    },
    {
        "student_id": 12121,
        "first": "George",
        "last": "Bush",
        "grade": 9,
        "hours": 10
    },
    {
        "student_id": 38209,
        "first": "Theodore",
        "last": "Cruz",
        "grade": 10,
        "hours": 0
    },
    {
        "student_id": 29048,
        "first": "Rand",
        "last": "Paul",
        "grade": 12,
        "hours": 100
    },
    {
        "student_id": 23904,
        "first": "Paul",
        "last": "Ryan",
        "grade": 9,
        "hours": 250
    },
]

class Students extends Component {
    state = {};

    render() {
        return (
            <React.Fragment>
                <Header active="Students" />
                {
                    testData.map(el => {
                        return <StudentOverview first={el.first} last={el.last} hours={el.hours}/>
                    })
                }
            </React.Fragment>
        );
    }
}

export default Students;
