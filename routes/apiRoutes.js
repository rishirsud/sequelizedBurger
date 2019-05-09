// import our cats model
const cats = require("../models/burger");

module.exports = app => {

  // GET all burgers
  app.get("/api/burger", function (req, res) {
    cats.findAll()
      .then(burger_db => res.json(burger_db))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // create/POST a new cat
  app.post("/api/burger", function (req, res) {
    cats.create(req.body)
      .then(burger_db => res.json(burger_db))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });


  // get a cat by its id
  app.get("/api/burger/:id", function (req, res) {
    cats.findById(req.params.id)
      .then(burger_db => res.json(burger_db))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // PUT/update a cat's sleepy to true/false by id
  app.put("/api/burger/:id", function (req, res) {
    cats.update(req.body.sleepy, req.params.id)
      .then(burger_db => res.json(burger_db))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // DELETE a cat by its id
  app.delete("/api/burger/:id", function (req, res) {
    cats.remove(req.params.id)
      .then(burger_db => res.json(burger_db))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}