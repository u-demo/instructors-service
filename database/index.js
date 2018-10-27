const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'MyNewPass',
  database: 'inst',
});

connection.connect();

module.exports = connection;
