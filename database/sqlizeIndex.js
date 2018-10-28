const Sequelize = require('sequelize');

const sequelize = new Sequelize('inst', 'root', 'MyNewPass', {
  dialect: 'mysql',

  pool: {
    max: 30,
    min: 0,
    acquire: 30000,
    idle: 1000,
  },
});

const Instructors = sequelize.define('instructors', {
  id: {
    type: Sequelize.INTEGER(6),
    autoIncrement: true,
    primaryKey: true,
  },
  inst_name: Sequelize.STRING(50),
  rating: Sequelize.DECIMAL(2, 1),
  reviews: Sequelize.INTEGER(7),
  students: Sequelize.INTEGER(8),
  courses: Sequelize.INTEGER(4),
  photo_url: Sequelize.STRING(255),
}, {
  timestamps: false,
  underscored: true,
});

const Courses = sequelize.define('courses', {
  id: {
    type: Sequelize.INTEGER(6),
    autoIncrement: true,
    primaryKey: true,
  },
  course_name: Sequelize.STRING(255),
  rating: Sequelize.DECIMAL(2, 1),
  reviews: Sequelize.INTEGER(7),
  lectures: Sequelize.INTEGER(4),
  num_hours: Sequelize.INTEGER(4),
  full_price: Sequelize.DECIMAL(6, 2),
  disc_price: Sequelize.DECIMAL(6, 2),
  photo_url: Sequelize.STRING(255),
}, {
  timestamps: false,
  underscored: true,
});

const Join = sequelize.define('join', {
  course_id: Sequelize.INTEGER(6),
  inst_id: Sequelize.INTEGER(6),
}, {
  timestamps: false,
  underscored: true,
});

Join.belongsTo(Instructors, { foreignKey: 'inst_id' });
Join.belongsTo(Courses, { foreignKey: 'course_id' });

sequelize.sync();

