const Sequelize = require('sequelize');
const db = require('./database');
const Campus = require('./Campus')

module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '../../public/favicon'
  },
  zodiac: {
    type: Sequelize.STRING
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      isFloat: true,
      max: 4.0,
      min: 0.0
    }
  }
})

// ,
// campus_id: {
//   type: Sequelize.INTEGER,
//   references: {
//     model: Campus,
//     key: "id"
//   }
// }
