var mysql = require("mysql");
var connection;
var JAWSDB_URL = "mysql://uvzh2hiya2we88ib:lud6v51q2bh2vktj@d6q8diwwdmy5c9k9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/z2gmtx18xro89ldl";

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'newpass',
    database: 'burgers_db'
  });
};

connection.connect();
module.exports = connection;
