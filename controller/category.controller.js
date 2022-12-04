let db = require("./../model");

let getAllCategories = async (req, res, next) => {
  try{
  let categories = await db.category.findAll();
  res.status(200).json(categories);
  } catch (err) {
    res.status(400).json({
      message: "Some internal error occured",
    })
  }
};


let getCategoryById = async (req, res, next) => {
  let id = req.params.categoryId;
  let categories = await db.category.findOne({
    where: {
      id: id,
    },
  });
  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.status(JSON.stringify(categories));
  res.status(200).json(categories);
  res.end();
};

let addNewCategory = async (req, res, next) => {
  try {
    let categoryToAdd = req.body;
    await Cdb.category.create(categoryToAdd);

    res.status(201).send("New category added");
    res.end();
  } catch (err) {
    next(err);
  }
};

let deleteCategoryById = async (req, res, next) => {
  let id = req.params.categoryId;

  let category = await db.category.findByPk(id);
  try {
    if (!category) {
      throw new Error("Category not found");
    }

    await db.category.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).send("category deleted");
    res.end();
  } catch (err) {
    next(err);
  }
};

let updateCategoryById = async (req, res, next) => {
  // if(!req.body.name){
  //     res.status(500).send("Please pass category name");
  //     res.end();
  // }

  let id = req.params.categoryId;
  let categoryToUpdate = {
    name: req.body.name,
    price: req.body.price,
  };
  // console.log(categoryToUpdate);

  await db.category.update(categoryToUpdate, {
    where: {
      id: id,
    },
  });

  let updateCategory = await db.category.findByPk(id);
  res.status(200).send(updateCategory);
};

// createTable();
// insertCategories();

module.exports = {
  getAllCategories,
  getCategoryById,
  addNewCategory,
  deleteCategoryById,
  updateCategoryById,
};
