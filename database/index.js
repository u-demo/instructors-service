const mysql = require('mysql');
const faker = require('faker');
const courses = require('./courseList.js');

const connection = mysql.createConnection({
  user: 'root',
  password: 'MyNewPass',
  database: 'inst',
});

const insertCourses = courses.map((courseName) => {
  return new Promise((resolve) => {
    const course = {
      id: null,
      course_name: courseName,
      rating: Math.floor(Math.random() * 50) / 10,
      reviews: Math.floor(Math.random() * 1000),
      lectures: Math.floor(Math.random() * 100),
      num_hours: Math.floor(Math.random() * 100),
      full_price: Math.floor(Math.random() * 100000) / 100,
      disc_price: Math.floor(Math.random() * 10000) / 100,
    };
    course.photo_url = `https://picsum.photos/200/300?image=${Math.floor(Math.random() * 1000)}`;

    connection.query('INSERT INTO courses SET ?', course, () => {
      resolve();
    });
  });
});

const insertInstructors = [...Array(30).keys()].map(() => {
  return new Promise((resolve) => {
    const inst = {
      inst_name: faker.name.findName(),
      students: Math.floor(Math.random() * 100000),
    };
    inst.photo_url = Math.random() > 0.5
      ? `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 90)}.jpg`
      : `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 90)}.jpg`;


    connection.query('INSERT INTO instructors SET ?', inst, () => {
      resolve();
    });
  });
});

const insertJoin = [...Array(100).keys()].map((num) => {
  return new Promise((resolve) => {
    const join = {
      inst_id: Math.ceil(Math.random() * 30),
      course_id: num + 1,
    };

    connection.query('INSERT INTO courses_inst SET ?', join);
    const ids = [join.inst_id];
    for (let i = 0.6; i < 1; i += 0.1) {
      if (Math.random() > i) {
        let newId = Math.ceil(Math.random() * 30);
        while (ids.includes(newId)) {
          newId = Math.ceil(Math.random() * 30);
        }
        ids.push(newId);
        connection.query('INSERT INTO courses_inst (inst_id, course_id) VALUES (?,?);',
          [newId, join.course_id], () => {
            resolve();
          });
      }
    }
  });
});

const updateInstructors = [...Array(30).keys()].map((num) => {
  return new Promise((re) => {
    connection.query('SELECT course_id FROM courses_inst WHERE inst_id=?;', [num + 1], (err, results) => {
      
      const getReviewInfo = results.map((result) => {
        return new Promise((resolve) => {
          connection.query('SELECT rating, reviews FROM courses WHERE id=?;',
            [result.course_id], (error, res) => {
              resolve(res);
            });
        });
      });
      
      Promise.all(getReviewInfo).then((data) => {
        return new Promise((resolve) => {
          let totScore = 0;
          let totReviews = 0;
          for (let i = 0; i < data.length; i += 1) {
            totScore += data[i][0].rating * data[i][0].reviews;
            totReviews += data[i][0].reviews;
          }
          const rating = Math.round(totScore / totReviews * 10) / 10;
          connection.query('UPDATE instructors SET rating = ?, reviews = ?, courses = ? WHERE id = ?;',
            [rating, totReviews, data.length, num + 1], () => {
              resolve();
              re();
            });
        });
      });
    });
  });
});

const tables = Promise.all(insertCourses)
  .then(() => {
    return Promise.all(insertInstructors);
  })
  .then(() => {
    return Promise.all(insertJoin);
  })
  .then(() => {
    return Promise.all(updateInstructors);
  });

tables.then(() => {
  connection.end();
});
