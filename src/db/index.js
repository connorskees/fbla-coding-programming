const sqlite3 = window.require("sqlite3").verbose();
const uuidv4 = require("uuid/v4");

const db = new sqlite3.Database(`students.db`);

// This block is a work around for the way that including a database works.
// It is not possible to easily include a database with prefilled
// rows that is also writeable. To this end, here we have hard-coded
// sample data that is meant to be used for demonstration purposes
// only. In a *true* production setting, this would not have to exist
// as we could simply create the data on the fly.
db.all("select name from sqlite_master where type='table'", function(err, tables) {
    if (tables.length === 0) {
        db.run(
          `CREATE TABLE
          students(
              uuid CHARACTER(36) PRIMARY KEY,
              first TEXT,
              last TEXT,
              volunteer_hours INTEGER,
              grade SMALLINT,
              student_id TEXT UNIQUE,
              community_service_award TEXT)`,
          function(err) {
            if (err) {
              console.error(err);
            } else {
                db.run(
                  `
                INSERT INTO
                students(uuid, first, last, volunteer_hours, grade, student_id, community_service_award)
                VALUES
                ('2acbda51-df15-4680-a968-44e9ca935853', 'George', 'Washington', 63, 10, '89696', 'Achievement'),
                ('db093ab9-4cb7-4db2-9751-218bb4a308a3', 'John', 'Adams', 139, 12, '63607', 'Service'),
                ('644ed331-236f-4692-b129-364dcece7f81', 'Thomas', 'Jefferson', 183, 10, '30513', 'Achievement'),
                ('420839fe-1dea-45ce-856f-0f3427fabd05', 'James', 'Madison', 22, 12, '57795', 'Community'),
                ('9c81cc59-f6ff-45c9-b84f-08dc49168104', 'James', 'Monroe', 195, 11, '12850', 'Achievement'),
                ('847433e4-43fa-4308-a0d5-9d8139c78dcd', 'Andrew', 'Jackson', 93, 11, '29360', 'Community'),
                ('aada6f01-93cf-492d-aabd-b5591d9406d1', 'Martin', 'Buren', 173, 9, '46603', 'Community'),
                ('a9779397-dfc3-4d95-b300-29d793ebf7c1', 'William', 'Harrison', 159, 11, '12649', 'Community'),
                ('23059b2f-994b-49d8-baa8-be29e7bf2d28', 'John', 'Tyler', 158, 11, '35254', 'Service'),
                ('5e7aa4a9-5343-4ceb-a6dd-1cc8a00d5882', 'James', 'Polk', 90, 9, '10805', 'Community'),
                ('c8289547-6975-4eb0-97e7-2e0a09087b1a', 'Zachary', 'Taylor', 63, 9, '29223', 'Service'),
                ('c328ecb4-b5c2-4c45-8780-b0e9a5e7b7d0', 'Millard', 'Fillmore', 161, 11, '13725', 'Community'),
                ('dae4c342-2c0d-465d-a016-d2812942db33', 'Franklin', 'Pierce', 88, 10, '24424', 'Community'),
                ('e7f8f691-6262-489c-8ff5-83467863c4ab', 'James', 'Buchanan', 144, 9, '32792', 'Service'),
                ('72dfbf63-1c49-4d1f-baef-bcc5c371fce0', 'Abraham', 'Lincoln', 46, 12, '25739', 'Community'),
                ('b3d81042-dc3d-4569-9333-e86cd4c1c519', 'Andrew', 'Johnson', 37, 9, '86216', 'Community'),
                ('ded6f77a-45ca-4e10-a284-1eff10e031dd', 'Ulysses', 'Grant', 155, 10, '92644', 'Service'),
                ('c02edfa2-cbd9-434b-8c0f-cb8a91e06e4a', 'Rutherford', 'Hayes', 83, 9, '25892', 'Achievement'),
                ('029de280-7248-4ea2-bb95-508c1a4bcb97', 'James', 'Garfield', 30, 9, '84324', 'Service'),
                ('85f64aaa-fe4b-4844-a64b-c610664ce2e1', 'Chester', 'Arthur', 148, 9, '70359', 'Service'),
                ('5684c8af-f175-4eb7-815b-8b1884c95fe3', 'Grover', 'Cleveland', 141, 11, '35802', 'Service'),
                ('5743f505-f058-4d49-bc4f-0ea63a3bdd1b', 'Benjamin', 'Harrison', 14, 11, '15461', 'Community'),
                ('fb5ddc4e-76f9-485f-a6fe-de0b3ed13032', 'William', 'McKinley', 186, 10, '95737', 'Achievement'),
                ('30451ecc-f1ef-4401-a96b-d1b8755144eb', 'Theodore', 'Roosevelt', 103, 10, '31665', 'Achievement'),
                ('502adc5e-f622-4051-9e43-1e6fb3db128a', 'William', 'Taft', 161, 11, '40494', 'Service'),
                ('fed0705e-c359-40b8-8eff-2e9641eb1309', 'Woodrow', 'Wilson', 168, 10, '99357', 'Achievement'),
                ('d630f8f4-3e64-4226-a59f-8018e183440a', 'Warren', 'Harding', 77, 10, '86308', 'Service'),
                ('9609747f-3f08-4166-bc9b-0f3af4f6398b', 'Calvin', 'Coolidge', 45, 10, '26606', 'Service'),
                ('81e3e977-3136-4f21-b162-4d5559c43b69', 'Herbert', 'Hoover', 62, 11, '48617', 'Service'),
                ('52d191f3-f5e4-48ca-9846-5961469743a6', 'Franklin', 'Roosevelt', 200, 11, '88153', 'Service'),
                ('3279c59e-fc89-4c59-a367-b3d0c049415f', 'Harry', 'Truman', 96, 11, '74551', 'Achievement'),
                ('35fd05d2-ffee-4d15-8f1d-d639fa27004d', 'Dwight', 'Eisenhower', 118, 9, '89547', 'Community'),
                ('64ff515d-c54c-4f12-ad28-7c8485232314', 'John', 'Kennedy', 85, 11, '40419', 'Achievement'),
                ('f293e889-633e-4233-8e32-5587bb8b9b44', 'Lyndon', 'Johnson', 17, 12, '45102', 'Community'),
                ('9a173a49-9e9a-43b5-a07f-0ccddcdc6e61', 'Richard', 'Nixon', 105, 12, '29182', 'Service'),
                ('2b50994c-8d5c-4729-953a-fad73e95a83c', 'Gerald', 'Ford', 75, 12, '12388', 'Achievement'),
                ('1f31cea3-060c-4143-b050-7a98a47ee36b', 'James', 'Earl', 129, 9, '50556', 'Community'),
                ('9d10bb04-1c20-49e9-9d9f-e156ac4c750a', 'Ronald', 'Reagan', 127, 9, '47868', 'Community'),
                ('f5fde181-692a-43fa-805e-93aaec3a92f9', 'George', 'Bush', 103, 11, '99539', 'Achievement'),
                ('5e2c4993-a29a-4275-896e-3d6d1791aa84', 'Bill', 'Clinton', 90, 9, '25819', 'Service')`,
                  function(err) {
                    if (err) {
                      console.error(err);
                    }
                  }
                );
            }
          }
        );
        
    }
});

function queryAll() {
    return new Promise((resolve, reject) => {
        let responseObj;
        db.all("SELECT * FROM students", (err, rows) => {
            if (err) {
                console.log(err);
                responseObj = {
                    'error': err
                };
                reject(responseObj);
            } else {
                responseObj = {
                    statement: this,
                    rows: rows
                };
                resolve(responseObj);
            }
        });
    });
}

// This helper function exists to allow
// pagination such that we don't pull
// the entire table into memory at once
function queryLimitNOffsetM(n, m) {
    return new Promise((resolve, reject) => {
        let responseObj;
        db.all("SELECT * FROM students LIMIT ? OFFSET ?", [n, m], (err, rows) => {
            if (err) {
                console.log(err);
                responseObj = {
                    'error': err
                };
                reject(responseObj);
            } else {
                responseObj = {
                    statement: this,
                    rows: rows
                };
                resolve(responseObj);
            }
        });
    });
}

function deleteStudent(uuid) {
    db.run("DELETE FROM students WHERE uuid = ?", uuid)
}

function update(uuid, first, last, volunteer_hours, grade, student_id, community_service_award) {
    db.run(
        `UPDATE students
        SET
        first = ?, last = ?, volunteer_hours = ?, grade = ?, student_id = ?, community_service_award = ?
        WHERE uuid = ?`,
        [ first, last, volunteer_hours, grade, student_id, community_service_award, uuid ],
        function (err) {
            if (err) {
                if (err.message.startsWith("SQLITE_CONSTRAINT: UNIQUE constraint failed: students.student_id")) {
                    alert(`Error: student id ${student_id} already exists (student ids must be unique)`);
                } else {
                    alert(err);
                }
                console.error(err);
                return err;
            }
        }
    );
}

function close() {
    db.close();
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
        db.run("INSERT INTO students VALUES (?, ?, ?, ?, ?, ?, ?)", [
            uuidv4(),
            first,
            last,
            volunteer_hours,
            grade,
            student_id,
            community_service_award
        ]);
    });
}

module.exports = {
  queryAll: queryAll,
  queryLimitNOffsetM: (n, m) => queryLimitNOffsetM(n, m),
  insert: (first, last, volunteer_hours, grade, student_id, community_service_award) => insert(first, last, volunteer_hours, grade, student_id, community_service_award),
  update: (uuid, first, last, volunteer_hours, grade, student_id, community_service_award) => update(uuid, first, last, volunteer_hours, grade, student_id, community_service_award),
  close: close,
  deleteStudent: deleteStudent
}
