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
      name: courseName,
      rating: Math.floor(Math.random() * 50) / 10,
      reviews: Math.floor(Math.random() * 1000),
      lectures: Math.floor(Math.random() * 100),
      num_hours: Math.floor(Math.random() * 100),
      full_price: Math.floor(Math.random() * 100000) / 100,
      disc_price: Math.floor(Math.random() * 10000) / 100,
      photo_url: 'https://picsum.photos/200/300/?random',
    };

    connection.query('INSERT INTO courses (id, course_name, rating, reviews, lectures, num_hours, full_price, disc_price, photo_url) VALUES (?,?,?,?,?,?,?,?,?);', [course.id, course.name, course.rating, course.reviews, course.lectures, course.num_hours, course.full_price, course.disc_price, course.photo_url], () => {
      resolve();
    });
  });
});

const insertInstructors = [...Array(30).keys()].map(() => {
  return new Promise((resolve) => {
    const inst = {
      id: null,
      name: faker.name.findName(),
      rating: null,
      reviews: null,
      students: Math.floor(Math.random() * 100000),
      courses: null,
      photo_url: 'https://picsum.photos/200/300/?random',
    };

    connection.query('INSERT INTO instructors (id, inst_name, rating, reviews, students, courses, photo_url) VALUES (?,?,?,?,?,?,?);', [inst.id, inst.name, inst.rating, inst.reviews, inst.students, inst.courses, inst.photo_url], () => {
      resolve();
    });
  });
});

const insertJoin = [...Array(100).keys()].map((num) => {
  return new Promise((resolve) => {
    const c_i = {
      inst_id: Math.ceil(Math.random() * 30),
      course_id: num + 1,
    };

    connection.query('INSERT INTO courses_inst (inst_id, course_id) VALUES (?,?);', [c_i.inst_id, c_i.course_id]);
    const ids = [c_i.inst_id];
    for (let i = 0.6; i < 1; i += 0.1) {
      if (Math.random() > i) {
        let new_Id = Math.ceil(Math.random() * 30);
        while (ids.includes(new_Id)) {
          new_Id = Math.ceil(Math.random() * 30);
        }
        ids.push(new_Id);
        connection.query('INSERT INTO courses_inst (inst_id, course_id) VALUES (?,?);', [new_Id, c_i.course_id], () => {
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
      const getCourses = Promise.all(getReviewInfo);
      
      getCourses.then((data) => {
        return new Promise((resolve) => {
          let totScore = 0;
          let totReviews = 0;
          for (let i = 0; i < data.length; i += 1) {
            totScore += data[i][0].rating * data[i][0].reviews;
            totReviews += data[i][0].reviews;
          }
          const rating = Math.round(totScore / totReviews * 10) / 10;
          connection.query('UPDATE instructors SET rating = ?, reviews = ?, courses = ? WHERE id = ?;',
            [rating, totReviews, data.length, num + 1], (error) => {
              if (error) console.log(error);
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
    // console.log('one');
    return Promise.all(insertInstructors);
  })
  .then(() => {
    // console.log('two');
    return Promise.all(insertJoin);
  })
  .then(() => {
    // console.log('three');
    return Promise.all(updateInstructors);
  });

tables.then(() => {
  console.log('hi');
});

