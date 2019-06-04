var orm = require("../config/orm.js");

// Routes
// =============================================================

module.exports = function(app) {

    // Search for Specific Character (or all burgers) then provides JSON
    app.get("/api/:burgers", function(req, res) {
  
        orm.selectAll(function(data) {
            res.json(data);
          });
    });
  
    // If a user sends data to add a new character...
    app.post("/api/new", function(req, res) {
  
      var burger = req.body;
  
      orm.insertOne(burger, function(data) {
        console.log(data);
      });
  
    });
  
    // If a user sends data to add a new character...
    app.put("/api/new", function(req, res) {
  
      var burger = req.body;
  
      orm.updateOne(burger, function(data) {
        console.log(data);
      });
  
    });
  };