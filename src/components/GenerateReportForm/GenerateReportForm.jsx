import React, { Component } from 'react';
import RadioChecked from 'assets/checked-radio.svg';
import RadioUnchecked from 'assets/unchecked-radio.svg';
import "./styles.scss";
import db from '../../db';

const fs = window.require("fs");

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
const exportFormats = ["CSV", "TSV", "JSON", "YAML"];

class GenerateReportForm extends Component {
    state = {
        // the currently selected export format
        exportFormat: "",
    };

    updateExportFormat = (event) => {
        this.setState({ exportFormat: event.target.id });
    }

    // we leave pretty printing as an execise for the user
    exportJSON = () => {
        db.queryAll()
        .then((response) => {
            this.saveFile("students.json", JSON.stringify(this.state.students));
        });
    }

    // rolling our own CSV serializer is flawed, but its much more lightweight
    // than pulling in an entire parser.
    //
    // the reason we are able to get away with just string formatting is that
    // we have checks elsewhere to ensure there are no quotes, commas, or null
    // fields in the data.
    exportCSV = () => {
        db.queryAll()
        .then((response) => {
            const data = response.rows.map(x => 
                `${x.uuid},${x.first},${x.last},${x.grade},${x.volunteer_hours},${x.student_id},${x.community_service_award}`
            ).join("\r\n");
            this.saveFile("students.csv", `uuid,first,last,grade,volunteer_hours,student_id,community_service_award\r\n${data}`);
        });
    }

    // the reason we can get away with string replacing, as stated above, is
    // that we can be *certain* there are no tabs within the data itself
    exportTSV = () => {
        db.queryAll()
        .then((response) => {
            const data = this.state.students.map(x =>
                `${x.uuid}\t${x.grade}\t${x.first}\t${x.last}\t${x.volunteer_hours}\t${x.student_id}\t${x.community_service_award}`
            ).join("\r\n");
            this.saveFile("students.tsv", `uuid\tfirst\tlast\tgrade\tvolunteer_hours\tstudent_id\tcommunity_service_award\r\n${data}`);
        });
    }

    exportYAML = () => {
        db.queryAll()
        .then((response) => {
        // whitespace is significant in YAML
        const students = this.state.students.map((x, idx) => {
            return `
    - student${idx}:
        uuid: ${x.uuid}
        grade: ${x.grade}
        first: ${x.first}
        last: ${x.last}
        volunteer_hours: ${x.volunteer_hours}`;
        });
        const data = `students: ${students.join("")}`;
        this.saveFile("students.yaml", data);
        });
    }

    saveFile = (fileName, data_) => {
        const data = new Uint8Array(Buffer.from(data_));
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                alert(err.message);
                console.error(err);
            };
        });
    }

    onSubmit = () => {
        switch (this.state.exportFormat) {
            case "CSV":
                this.exportCSV();
                break;
            case "TSV":
                this.exportTSV();
                break;
            case "JSON":
                this.exportJSON();
                break;
            case "YAML":
                this.exportYAML();
                break;
            case "":
                alert("No export format selected");
                break;
            default:
                // this shouldn't happen
                console.error(`unknown export format: ${this.state.exportFormat}`);
        }
    }

    render() {
        const { exportFormat } = this.state;
        return (
            <form className="generate-report-container"
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.onSubmit();
                }}
                onKeyDown={
                    (e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            this.onSubmit();
                        }
                    }
                }>
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
