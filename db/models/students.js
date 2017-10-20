const db = require('../index.js');
const Sequelize = db.Sequelize;


const Students = db.define('students', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false
	}
})




module.exports = Students