const express = require('express');
const mysql = require('../database/index.js');

const app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.get('/instructors', (req, res) => {
  mysql.query('SELECT * FROM instructors', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
