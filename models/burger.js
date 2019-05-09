//import our connection
const connection = require('./connection');

// SELECT * FROM burger
const findAll = () => {
  // create a new Promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burger', function (err, burgers_db) {
      if (err) {
        return reject(err);
      }
      return resolve(burgers_db);
    });
  });
};

// SELECT * FROM cats WHERE id = ?
const findById = catId => {
  // create a new Promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burger WHERE id = ?', [catId], function (err, burgers_db) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(burgers_db);
    });
  });
};

// CREATE/INSERT
const create = burgerDataObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burger SET ?', [burgerDataObj], function (err, burgers_db) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(burgers_db);
    });
  });
};

// UPDATE burger (set value of "sleepy" to true or false)
const update = (isEaten, burgerId) => {
  return new Promise((resolve, reject) => {

    isEaten = (isEaten === "false") ?
      false : true;

    connection.query("UPDATE burger SET eaten = ? WHERE id = ?", [isEaten, burgerId], function (err, burgers_db) {

      if (err) {
        return reject(err);
      } else if (burgers_db.changedRows === 0) {
        return reject({
          message: "You probably have the wrong ID"
        });
      } else {
        return resolve(burgers_db);
      }
    })
  })
}

// DELETE a cat
const remove = (catId) => {
  return new Promise((resolve, reject) => {

    connection.query("DELETE FROM burger WHERE id = ?", [catId], function (err, burgers_db) {

      if (err) {
        return reject(err);
      } else if (burgers_db.affectedRows === 0) {
        return reject({
          message: "You probably have the wrong ID"
        });
      } else {
        return resolve(burgers_db);
      }
    })
  })
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};