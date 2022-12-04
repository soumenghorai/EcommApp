let express = require("express");
let bodyParser = require("body-parser");
let router = require("./routes/index");
const ErrorHandler = require("./middlewares/ErrorHandler");
// const dbConnection = require("./config/db.config");
const db = require("./model");
const expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(router);
expressApp.use(ErrorHandler);

db.category.hasMany(db.product);

db.connection.sync({ force: true }).then(() => {
    init();
});

let init = async () => {
  await db.connection.sync({ force: true });
  insertCategories();
  insertRoles();
};

let insertCategories = async () => {
  await db.category.bulkCreate([
    {
      name: "Fashion",
    },
    {
      name: "Mobile",
    },
    {
      name: "Electronics",
    },
    {
      name: "Appliances",
    },
  ]);
};

let insertRoles = async () => {
  await db.roles.bulkCreate([
    {
      id: 1,
      name: "user",
    },
    {
      id: 2,
      name: "admin",
    },
   
  ]);
  console.log("roles added");
};

module.exports = expressApp;