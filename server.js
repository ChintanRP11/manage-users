const bodyParser = require('body-parser');
const cors = require('cors');
const history = require("connect-history-api-fallback");
const express = require('express');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", history(),express.static(path.join(__dirname , "/dist")));

const db = require('./app/config/db.config.js');
  
// Sync Database => clearing database and tables by using {force:true}.
db.sequelize.sync().then(() => {
  console.log('Synchronized with database.');
});

// Path to the routes.
require('./app/route/user.route.js')(app);

// Create a Server.
const server = app.listen(8080, function () {
 
  let host = server.address().address;
  let port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
})