const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowedNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://crja.com/website-admin/wp-content/media-versions/2015/10/1920w_x1920h_c-agnes-scott-students-on-green.jpg'
  },
  address: {
    type: Sequelize.STRING,
    allowedNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT('long')
  }
})
