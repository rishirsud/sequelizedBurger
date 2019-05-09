// import our cats model
// const Burger = require("../models/");

// export our route definitions as a function
module.exports = (app) => {

  app.get("/", function (req, res) {
    res.redirect("/api/burger");
  });
}