const Categories = require("./../model/category");

const validatorReqForCategoryName = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Category name is required",
    });
  }
  next();
};

const validateReqForCategoryId = async (req, res, next) => {
  let id = req.params.categoryId;
  if (id) {
    let category = await Categories.findByPk(id)
   
    if (!category) {
      res.status(400).send({
        message: "Category does not exist",
      });
      
    }
  } else {
    res.status(400).send({
      message: "Category id is missing",
    });
  }
  res.end();
  
};

module.exports = { validatorReqForCategoryName,validateReqForCategoryId };
