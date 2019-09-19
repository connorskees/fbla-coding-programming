import React, { Component } from 'react';
import RadioChecked from 'assets/checked-radio.svg';
import RadioUnchecked from 'assets/unchecked-radio.svg';
import "./styles.scss";

const exportFormats = ["CSV", "TSV", "JSON", "XML", "YAML"];

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
        "hours": 125
    },
    {
        "student_id": 38209,
        "first": "Theodore",
        "last": "Cruz",
        "grade": 10,
        "hours": 125
    },
    {
        "student_id": 29048,
        "first": "Rand",
        "last": "Paul",
        "grade": 12,
        "hours": 125
    },
    {
        "student_id": 23904,
        "first": "Paul",
        "last": "Ryan",
        "grade": 9,
        "hours": 125
    },
]

class GenerateReportForm extends Component {
    state = {
        // the currently selected export format
        exportFormat: ""
    };

    updateExportFormat = (event) => {
        this.setState({ exportFormat: event.target.id });
    }

    render() {
        const { exportFormat } = this.state;
        return (
            <form className="generate-report-container">
                <div className="export-select-container">
                    <h3>Export As</h3>
                    {exportFormats.map(format => {
                        let imageSrc = format === exportFormat ? RadioChecked : RadioUnchecked;
                        return (
                            <label key={format} htmlFor={format}>
                                <input onChange={this.updateExportFormat} className="export-type-radio" name="export-type" type="radio" id={format} />
                                <img src={imageSrc} alt="radio button" className="radio-img" />
                                {format}
                            </label>
                        )
                    })}
                </div>

                <div className="preview-container">
                    <h3>Preview</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Grade</th>
                                <th>Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testData.map((el, count) => {
                                return (
                                    <tr key={el.student_id}>
                                        <td>{count+1}</td>
                                        <td>{el.student_id}</td>
                                        <td>{el.first} {el.last}</td>
                                        <td>{el.grade}</td>
                                        <td>{el.hours}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <button className="submit-button" type="submit">
                        Download
                    </button>
                </div>
            </form>
        );
    }
}

export default GenerateReportForm;
