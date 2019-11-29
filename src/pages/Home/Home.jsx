import React, { Component } from 'react';
import Header from "components/Header";
import "./styles.scss";

class Home extends Component {
    state = {};

    render() {
        return (
          <React.Fragment>
            <Header active="Home" />
            <section className="text">
              <h2 id="students">Students</h2>
              <p>
                The "students" tab is where you can manage your
                students. There, you will find information about students; their
                name and hours are highlighted, but by hitting
                the pencil icon on the right of the green bar you can view
                ancillary information about respective students such as their
                grade, student id, and community service award.
              </p>

              <p>
                Additionally, after clicking the pencil you are able to update and make
                changes to the information. The <code>first</code> and
                <code>last</code> fields will reject any names containing any of
                the following characters:{" "}
                <code>&gt; &lt; &quot; &apos; &amp; , {"{ }"} ( )</code>.
                Student ids can be any arbitrary string (though it is suggested
                for them to be under 10 characters), but they <em>must</em> but
                unique between students.
              </p>

              <p>
                  The green bar in the middle fills up as more hours are logged. It tracks
                  the progress to the student achieving 200 hours.
              </p>

              <p>
                  You can page through the students by hitting the arrows in the bottom right.
                  Students are shown 5 at a time to reduce memory usage. You can add students
                  by clicking the <code>+</code> between the arrows.
              </p>
              <h2 id="generate-report">Generate Report</h2>
              <p>
                The "generate reports" tab is where you can export you data to
                be printed or handled by external programs. It supports the
                following formats: <code>JSON</code>, <code>CSV</code>,{" "}
                <code>TSV</code>, and <code>YAML</code>. It is important to note
                that the <code>JSON</code> is in minified form.
              </p>
            </section>
          </React.Fragment>
        );
    }
}

export default Home;
