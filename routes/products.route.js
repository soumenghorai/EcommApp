let express = require("express");
let productRouter = express.Router();
let productController = require("./../controller/product.controller");
let authJwt = require("./../middlewares/authJwt");

productRouter.get("/", [authJwt.VerifyToken], productController.getAllProducts);

productRouter.get("/:productId", productController.getProductById);

// productRouter.post("/", productController.addNewProduct);

// productRouter.delete("/:productId", productController.deleteProductById);

// productRouter.put("/:productId", productController.updateProductById);

productRouter.post("/", productController.insertProducts);

module.exports = productRouter;
