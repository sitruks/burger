var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(burger, callback) {
    var s = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
    burger.devoured = burger.devoured || 0;
    connection.query(s, [
      burger.burger_name, burger.devoured
    ], function(err, result) {

      callback(result);

    });
  },
  updateOne: function(burger, callback) {
    var s = "UPDATE " + tableName + " SET burger_name=? WHERE id=?";

    connection.query(s, [
      burger.burger_name, burger.id
    ], function(err, result) {

      callback(result);

    });
  }
};

module.exports = orm;
