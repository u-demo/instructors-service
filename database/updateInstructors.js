const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'MyNewPass',
  database: 'inst',
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

module.exports = updateInstructors;
