import React, { Component } from 'react';
import Header from "components/Header";
import GenerateReportForm from "components/GenerateReportForm";
import "./styles.scss";

class GenerateReport extends Component {
    state = {};

    render() {
        return (
            <React.Fragment>
                <Header active="Generate Report"/>
                <GenerateReportForm />
            </React.Fragment>
        );
    }
}

export default GenerateReport;
