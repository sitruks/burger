var connection = require("./connection.js");

// ORM
// =============================================================

var tableName = "burgers";

var orm = {

  allBurgers: function(callback) {
    var s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {
      callback(result);
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
