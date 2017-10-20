
const db = require('../index.js')
const Sequelize = db.Sequelize;


const Campuses = db.define('campuses', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	imageUrl: {
		type: Sequelize.STRING,
		allowNull: false
	}
})



module.exports = Campuses