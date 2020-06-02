const db = require('../config/db.config.js');
const User = db.users;


// Save User to MySQL database.
exports.createUser = async (req, res) => {		
	let user = req.body;
	const result = await User.create(user);
	res.status(200).json(result);
};
 
// Fetch all Users
exports.getUsers = async (req, res) => {
	const users = await User.findAll();
	res.status(200).json(users);	// Send all users to Client.
};

// Find a User by Id
exports.getUser = async (req, res) => {	
	const user = await User.findByPk(req.params.userId);
	res.status(200).json(user);		//send searched user to client.
};
 
// Update User Data.
exports.updateUser = async (req, res) => {
	let user = req.body;
	let id = req.body.id;
	await User.update(user, { where: {id: id} });
	res.status(200).json({msg:"updated successfully a user with id = " + id});
};
 
// Delete a User by Id
exports.deleteUser = async (req, res) => {
	const id = req.params.userId;
	await User.destroy({ where: { id: id } })
	res.status(200).json({msg:'deleted successfully a user with id = ' + id});
};