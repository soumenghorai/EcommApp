let express = require("express");
let bodyParser = require("body-parser");
let serverConfig = require("./config/server.config");
let router = require("./routes/index");
const ErrorHandler = require("./middlewares/ErrorHandler");
let expressApp = express();
const dbConnection = require("./config/db.config");
const Category = require("./model/category");
const Products = require("./model/product");
expressApp.use(bodyParser.json());
expressApp.use(router);
expressApp.use(ErrorHandler);

Category.hasMany(Products);

let init = async () => {
  await dbConnection.sync({ force: true });
  insertCategories();
};

let insertCategories = async () => {
  await Category.bulkCreate([
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

expressApp.listen(serverConfig.PORT, () => {
  console.log("server is running on port " + serverConfig.PORT);
  init();
});
