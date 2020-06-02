module.exports = function(app) {
 
    const users = require('../controller/user.controller.js');
 
    // POST: Create a new User
    app.post('/users', users.createUser);
 
    // GET: Retrieve all Users
    app.get('/users', users.getUsers);
 
    // GET: Retrieve a single User by Id
    app.get('/users/:userId', users.getUser);
 
    // PUT: Update a User with Id
    app.put('/users', users.updateUser);
 
    // DELETE: Delete a User with Id
    app.delete('/users/:userId', users.deleteUser);
}