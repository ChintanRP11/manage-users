// User model.
module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
	  firstname: {
			type: Sequelize.STRING
	  },
	  lastname: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING
	  },
	  dob: {
			type: Sequelize.DATEONLY
		},
		bio: {
			type: Sequelize.STRING
	  }
	});
	
	return User;
}