let express = require("express");
const path = require("path");
let catgoryRoutes = require("./categories.route");
let productRoutes = require("./products.route");
const authRoute = require("./auth.route");
let router = express.Router();

router.get("/", (req, res, next) => {
  res.write("This is the base page");
  res.end();
});

router.use("/ecomm/api/v1/categories", catgoryRoutes);

router.use("/ecomm/api/v1/products", productRoutes);

router.use("/ecomm/api/v1/auth", authRoute);

module.exports = router;
