const db = require("../model");

let insertProducts = async (req, res, next) => {
  await db.product.bulkCreate([
    {
      name: "Hrx",
      categoryId: 1,
      price: 18000,
    },
    {
      name: "Iphone 13",
      categoryId: 2,
      price: 60000,
    },
    {
      name: "Sony bravia",
      categoryId: 3,
      price: 40000,
    },
    {
      name: "Boat Rugged",
      categoryId: 4,
      price: 4000,
    },
    {
      name: "JBL Storm",
      categoryId: 4,
      price: 9000,
    },
    {
      name: "Vu 5",
      categoryId: 3,
      price: 32000,
    },
  ]);

  res.status(201).json({
    message: "Products added",
  });
};

let create = async (req, res, next) => {
  let productToAdd = req.body;
  try{
    await db.product.create(productToAdd);
    res.status(201).json(productToAdd);
  } catch (err){
    res.status(500).json({
      message: "Some internal error occured",
    });
  }
};

let getAllProducts = async (req, res, next) => {
  let categoryId = req.query.categoryId;
  let minPrice = req.query.minPrice;
  let maxPrice = req.query.maxPrice;
  let products = [];

  if (Object.keys(req.query).length == 0) {
    products = await db.product.findAll();
  } else {
    if (categoryId && !(minPrice || maxPrice)) {
      products = await filterByCategory(categoryId);
    } else if (!categoryId && minPrice && maxPrice) {
      products = await filterByPriceRange(minPrice, maxPrice);
    } else {
      products = await db.product.findAll({
        where: {
          categoryId: categoryId,
          price: {
            [db.sequelize.Op.gte]: minPrice,
            [db.sequelize.Op.lte]: maxPrice,
          },
        },
      });
    }
  }
  res.status(200).json(products);
  res.end();
};

let filterByCategory = async (categoryId) => {
  let filteredProducts = await db.product.findAll({
    where: {
      categoryId: categoryId,
    },
  });
  return filteredProducts;
};

let filterByPriceRange = async (minPrice, maxPrice) => {
  let filteredProducts = await db.product.findAll({
    where: {
      price: {
        [db.sequelize.Op.gte]: minPrice,
        [db.sequelize.Op.lte]: maxPrice,
      },
    },
  });
  return filteredProducts;
};

let getProductById = async (req, res, next) => {
  let id = req.params.productId;
  if (!id) {
    res.status(400).send("ID not passed");
  }
  let products = await db.product.findAll({
    where: {
      id: id,
    },
  });
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(products));
  res.end();
};

// let createTable = async () => {
//     await dbConnection.sync();
//     console.log("Table is created");
// }

let addNewProduct = async (req, res, next) => {
  let productToAdd = req.body.name;
  await Products.create({
    name: productToAdd,
  });

  res.status(201).send("New product added");
  res.end();
};

let deleteProductById = async (req, res, next) => {
  let id = req.params.productId;
  await Products.destroy({
    where: {
      id: id,
    },
  });

  res.status(200).send("product deleted");
  res.end();
};

let updateProductById = async (req, res, next) => {
  let id = req.params.productId;
  let productToUpdate = {
    name: req.body.name,
    price: req.body.price,
  };

  Products.update(productToUpdate, {
    where: {
      id: id,
    },
  });

  let updateProduct = await Products.findByPk(id);
  res.status(200).send(updateProduct);
};

// createTable();
// insertProducts();

module.exports = {
  getAllProducts,
  getProductById,
  // addNewProduct,
  // deleteProductById,
  // updateProductById,
  insertProducts,
  create,
};
