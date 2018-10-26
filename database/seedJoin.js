const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'MyNewPass',
  database: 'inst',
});

const insertJoin = [...Array(100).keys()].map((num) => {
  return new Promise((resolve) => {
    const join = {
      instId: Math.ceil(Math.random() * 30),
      courseId: num + 1,
    };

    connection.query('INSERT INTO courses_inst (inst_id, course_id) VALUES (?,?);', [join.instId, join.courseId]);
    const ids = [join.instId];
    for (let i = 0.6; i < 1; i += 0.1) {
      if (Math.random() > i) {
        let newId = Math.ceil(Math.random() * 30);
        while (ids.includes(newId)) {
          newId = Math.ceil(Math.random() * 30);
        }
        ids.push(newId);
        connection.query('INSERT INTO courses_inst (inst_id, course_id) VALUES (?,?);', [newId, join.courseId], () => {
          resolve();
        });
      }
    }
  });
});

module.exports = insertJoin;
