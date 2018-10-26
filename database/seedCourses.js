const mysql = require('mysql');
const courses = require('./courseList.js');

const connection = mysql.createConnection({
  user: 'root',
  password: 'MyNewPass',
  database: 'inst',
});

const insertCourses = courses.map((courseName) => {
  return new Promise((resolve) => {
    const course = {
      name: courseName,
      rating: Math.floor(Math.random() * 50) / 10,
      reviews: Math.floor(Math.random() * 1000),
      lectures: Math.floor(Math.random() * 100),
      num_hours: Math.floor(Math.random() * 100),
      full_price: Math.floor(Math.random() * 100000) / 100,
      disc_price: Math.floor(Math.random() * 10000) / 100,
      photo_url: 'https://picsum.photos/200/300/?random',
    };

    connection.query('INSERT INTO courses (course_name, rating, reviews, lectures, num_hours, full_price, disc_price, photo_url) VALUES (?,?,?,?,?,?,?,?);',
      [course.name, course.rating, course.reviews, course.lectures, course.num_hours,
        course.full_price, course.disc_price, course.photo_url], () => {
        resolve();
      });
  });
});

module.exports = insertCourses;
