const mysql = require('mysql');
const courses = require('./courseList.js');

const connection = mysql.createConnection({
  user: 'root',
  password: 'MyNewPass',
  database: 'inst',
});

connection.connect();

courses.forEach((course) => {
  const data = {
    id: null,
    name: course,
    rating: Math.floor(Math.random() * 50) / 10,
    reviews: Math.floor(Math.random() * 10000),
    lectures: Math.floor(Math.random() * 100),
    num_hours: Math.floor(Math.random() * 100),
    full_price: Math.floor(Math.random() * 100000) / 100,
    disc_price: Math.floor(Math.random() * 10000) / 100,
    photo_url: 'https://picsum.photos/200/300/?random',
  };

  connection.query('INSERT INTO courses (id, course_name, rating, reviews, lectures, num_hours, full_price, disc_price, photo_url) VALUES (?,?,?,?,?,?,?,?,?);', [data.id, data.name, data.rating, data.reviews, data.lectures, data.num_hours, data.full_price, data.disc_price, data.photo_url], (err, results, fields) => {
    if (err) {
      throw ('error');
    }
  });
});
