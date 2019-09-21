const fs = window.require('fs');
const sqlite3 = window.require('sqlite3');
const uuidv4 = require('uuid/v4');

const db = new sqlite3.Database('db/students.db');

function queryAll() {
    console.log(db);
    db.serialize(function () {
        db.each("SELECT * FROM students", function (err, row) {
            console.log(row);
        });
    });
    db.close()
}

function update(uuid, first, last, volunteer_hours, grade, student_id, community_service_award) {
    db.serialize(function () {
        db.run("UPDATE students SET first = ?, last = ?, volunteer_hours = ?, grade = ?, student_id = ?, community_service_award = ? WHERE uuid = ?;", [
            first,
            last,
            volunteer_hours,
            grade,
            student_id,
            community_service_award,
            uuid
        ]);
    });
    db.close()
}

/*
0 | uuid | CHARACTER(36)
1 | first | TEXT
2 | last | TEXT
3 | volunteer_hours | INTEGER
4 | grade | SMALLINT
5 | student_id | TEXT
6 | community_service_award | TEXT
*/
function insert(first, last, volunteer_hours, grade, student_id, community_service_award) {
    db.serialize(function () {
        db.run("INSERT INTO students * VALUES (?, ?, ?, ?, ?, ?, ?)", [
            uuidv4(),
            first,
            last,
            volunteer_hours,
            grade,
            student_id,
            community_service_award
        ]);
    });
    db.close()
}

module.exports = {
  queryAll: queryAll,
  insert: (first, last, volunteer_hours, grade, student_id, community_service_award) => insert(first, last, volunteer_hours, grade, student_id, community_service_award),
  update: (uuid, first, last, volunteer_hours, grade, student_id, community_service_award) => update(uuid, first, last, volunteer_hours, grade, student_id, community_service_award)
}
