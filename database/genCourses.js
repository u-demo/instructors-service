const courses = require('./courseList.js');

const courseData = courses.map(course => ({
  course_name: course,
  rating: Math.floor(Math.random() * 50) / 10,
  reviews: Math.floor(Math.random() * 1000),
  lectures: Math.floor(Math.random() * 100),
  num_hours: Math.floor(Math.random() * 100),
  full_price: Math.floor(Math.random() * 100000) / 100,
  disc_price: Math.floor(Math.random() * 10000) / 100,
  photo_url: `https://picsum.photos/200/300?image=${Math.floor(Math.random() * 1000)}`,
}));

module.exports = courseData;
