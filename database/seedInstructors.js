const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
  user: 'root',
  password: 'MyNewPass',
  database: 'inst',
});

const insertInstructors = [...Array(30).keys()].map(() => {
  return new Promise((resolve) => {
    const inst = {
      name: faker.name.findName(),
      students: Math.floor(Math.random() * 100000),
      photo_url: 'https://picsum.photos/200/300/?random',
    };

    connection.query('INSERT INTO instructors (inst_name, students, photo_url) VALUES (?,?,?);',
      [inst.name, inst.students, inst.photo_url], () => {
        resolve();
      });
  });
});

module.exports = insertInstructors;
