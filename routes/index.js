let express = require("express");
let router = express.Router();
let catgoryRoutes = require("./categories.route");
let productRoutes = require("./products.route");

router.get("/", (req, res, next) => {
  res.write("This is the base page");
  res.end();
});

router.use("/ecomm/api/v1/categories", catgoryRoutes);

router.use("/ecomm/api/v1/products", productRoutes);

module.exports = router;
