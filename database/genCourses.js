const courses = require('./courseList.js');

const courseData = courses.map((course) => {
  const c = {
    course_name: course,
    rating: Math.ceil(Math.random() * 50) / 10,
    reviews: Math.ceil(Math.random() * 1000),
    lectures: Math.ceil(Math.random() * 100),
    full_price: Math.floor(Math.random() * 100000) / 100,
    photo_url: `https://picsum.photos/200/300?image=${Math.ceil(Math.random() * 50)}`,
  };
  c.num_hours = c.lectures * (Math.random() * 10);
  c.disc_price = Math.floor(c.full_price * 10) / 100;
  return c;
});

module.exports = courseData;
