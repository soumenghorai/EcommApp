let express = require("express");
let categoryRouter = express.Router();
let categoryController = require("./../controller/category.controller");
let requestValidator = require("./../middlewares/RequestValidator");

categoryRouter.get("/", categoryController.getAllCategories);

categoryRouter.get(
  "/:categoryId",
  [requestValidator.validateReqForCategoryId],
  categoryController.getCategoryById
);

categoryRouter.put(
  "/:categoryId",
  [requestValidator.validatorReqForCategoryName],
  categoryController.updateCategoryById
);

categoryRouter.post(
  "/",
  [requestValidator.validatorReqForCategoryName],
  categoryController.addNewCategory
);

categoryRouter.delete(
  "/:categoryId",
  [requestValidator.validatorReqForCategoryName],
  categoryController.deleteCategoryById
);

module.exports = categoryRouter;
