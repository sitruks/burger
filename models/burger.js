var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(burger_name, devoured, cb) {
      orm.insertOne(burger_name, devoured, function(res) {
        cb(res);
      });
    },
    updateOne: function(burger_name, devoured, id, cb) {
      orm.updateOne(burger_name, devoured, id, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgers_Controller.js).
  module.exports = burger;