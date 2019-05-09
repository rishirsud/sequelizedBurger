// import our cats model
const burger = require("../models/burger");

// export our route definitions as a function
module.exports = (app) => {

  app.get("/", function(req, res) {

    // use cat.findAll
    burger
      .findAll()
      // if we get to resolve()
      .then(burger_db => {
        res.render("index", {burgerData: burger_db})
      })
      // if we get to reject()
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}