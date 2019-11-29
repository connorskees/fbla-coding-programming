import React, { Component } from 'react';
import RadioChecked from 'assets/checked-radio.svg';
import RadioUnchecked from 'assets/unchecked-radio.svg';
import "./styles.scss";
import db from '../../db';

const { dialog } = window.require("electron").remote;
const fs = window.require("fs");
const path = window.require("path");

// How many students (rows) to show in the preview
// of the report
const amtPreviewed = 5;

const exportFormats = ["CSV", "TSV", "JSON", "YAML"];

class GenerateReportForm extends Component {
    state = {
        // the currently selected export format
        exportFormat: "",
        studentsPreview: []
    };

    componentDidMount() {
        db.queryLimitNOffsetM(amtPreviewed, 0).then((response) => {
            this.setState({ studentsPreview: response.rows });
        });
    }

    updateExportFormat = (event) => {
        this.setState({ exportFormat: event.target.id });
    }

    // we pretty print by default
    exportJSON = () => {
        db.queryAll()
        .then((response) => {
            this.saveFile(
              "students.json",
              JSON.stringify(response.rows, null, 2)
            );
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
                `${x.first},${x.last},${x.grade},${x.volunteer_hours},${x.student_id},${x.community_service_award}`
            ).join("\r\n");
            this.saveFile("students.csv", `first,last,grade,volunteer_hours,student_id,community_service_award\r\n${data}`);
        });
    }

    // the reason we can get away with string replacing, as stated above, is
    // that we can be *certain* there are no tabs within the data itself
    exportTSV = () => {
        db.queryAll()
        .then((response) => {
            const data = response.rows
              .map(
                x =>
                  `${x.first}\t${x.last}\t${x.grade}\t${x.volunteer_hours}\t${x.student_id}\t${x.community_service_award}`
              )
              .join("\r\n");
            this.saveFile("students.tsv", `first\tlast\tgrade\tvolunteer_hours\tstudent_id\tcommunity_service_award\r\n${data}`);
        });
    }

    exportYAML = () => {
        db.queryAll()
        .then((response) => {
        // whitespace is significant in YAML
        const students = response.rows.map((x, idx) => {
            return `
    - student${idx}:
        first: ${x.first}
        last: ${x.last}
        grade: ${x.grade}
        volunteer_hours: ${x.volunteer_hours}`;
        });
        const data = `students: ${students.join("")}`;
        this.saveFile("students.yaml", data);
        });
    }

    saveFile = (fileName, data_) => {
        const data = new Uint8Array(Buffer.from(data_));

        dialog.showOpenDialog({
            properties: ["openDirectory", "multiSelections"]
        }).then(res => {
            const dir = res.filePaths[0];
    
            if (dir !== undefined) {
              fs.writeFile(path.join(dir, fileName), data, err => {
                if (err) {
                  alert(err.message);
                  console.error(err);
                }
              });
            }
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
        const { studentsPreview, exportFormat } = this.state;
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
                            {studentsPreview.map((el, idx) => {
                                return (
                                    <tr key={el.student_id}>
                                        {/*
                                            We increment idx by 1 because `idx` is indexed
                                            at 0, and we want the UI to be friendly to people
                                            that don't have a programming background.
                                        */}
                                        <td>{idx+1}</td>
                                        <td>{el.student_id}</td>
                                        <td>{el.first} {el.last}</td>
                                        <td>{el.grade}</td>
                                        <td>{el.volunteer_hours}</td>
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
