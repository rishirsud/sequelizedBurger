const express = require("express");
const hbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models");


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.engine('handlebars', hbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});