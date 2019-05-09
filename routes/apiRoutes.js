// import our cats model
// const cats = require("../models/burger");
const db = require("../models");


module.exports = app => {

  // GET all burgers
  app.get("/api/burger", function (req, res) {
    db.Burger.findAll({}).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });

  app.post("/api/burger", function (req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });

  // PUT/update a cat's sleepy to true/false by id
  app.put("/api/burger/:id", function (req, res) {
    db.Burger.update({
      eaten: req.body.eaten
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // DELETE a cat by its id
  app.delete("/api/burger/:id", function (req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
}