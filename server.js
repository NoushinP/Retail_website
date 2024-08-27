const express = require('express');
const sequelize = require('./config/connection'); //ORM Object Relation Map

const routes = require('./routes');

const app = express(); // initializing application (telling our code exists)
const PORT = process.env.PORT || 3001;

app.use(express.json()); // we are using json to accept/return data
app.use(express.urlencoded({ extended: true })); // code the special characters like %$...

app.use(routes); // option providing for our server app.use, map to server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});