let Categories = require("./../model/category");
// let dbConnection = require("./../config/db.config");

// let createTable = async () => {
//   await dbConnection.sync({ force: true });
//   insertCategories();
//   console.log("Table created successfully");
// };

let getAllCategories = async (req, res, next) => {
  let categories = await Categories.findAll();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(categories));
  res.end();
};

let getCategoryById = async (req, res, next) => {
  let id = req.params.categoryId;
  let categories = await Categories.findAll({
    where: {
      id: id,
    },
  });
  // res.writeHead(200, { "Content-Type": "application/json" });
  res.status(JSON.stringify(categories));
  res.end();
};

let addNewCategory = async (req, res, next) => {
  try {
    // let c = 5 / 10;
    // if (c == Infinity) {
    //   throw new Error("Dont want Infinity");
    // }
    let categoryToAdd = req.body;
    await Categories.create(categoryToAdd);

    res.status(201).send("New category added");
    res.end();
  } catch (err) {
    next(err);
  }
  //     res.status(400).send("Something went wrong");
  // // }   finally{
  // //     res.end();
  // // }
};

let deleteCategoryById = async (req, res, next) => {
  let id = req.params.categoryId;

  let category = await Categories.findByPk(id);
  try {
    if (!category) {
      throw new Error("Category not found");
    }

    await Categories.destroy({
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

  await Categories.update(categoryToUpdate, {
    where: {
      id: id,
    },
  });

  let updateCategory = await Categories.findByPk(id);
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
