const faker = require('faker');

const instructorGenerator = (num) => {
  const instructorData = [];
  for (let i = 1; i <= num; i += 1) {
    const instructor = {
      inst_name: faker.name.findName(),
      students: Math.floor(Math.random() * 100000),
    };
    instructor.photo_url = Math.random() > 0.5
      ? `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 90)}.jpg`
      : `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 90)}.jpg`;
    instructorData.push(instructor);
  }
  return instructorData;
};

const updateInstructor = (courses) => {
  let totScore = 0;
  let totReviews = 0;
  for (let i = 0; i < courses.length; i += 1) {
    totScore += courses[i].dataValues.rating * courses[i].dataValues.reviews;
    totReviews += courses[i].dataValues.reviews;
  }
  const score = Math.round(totScore / totReviews * 10) / 10;
  return { rating: score, reviews: totReviews, courses: courses.length };
};

module.exports = { instructorGenerator, updateInstructor };
