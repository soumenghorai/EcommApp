const sequelize = require("sequelize");
let dbConnection = require("./../config/db.config");

let Categories = dbConnection.define(
  "categories",
  {
    id: {
      primaryKey: true,
      notNull: true,
      type: sequelize.DataTypes.BIGINT,
      autoIncrement: true,
    },
    name: {
      notNull: true,
      type: sequelize.DataTypes.STRING,
      // allowNull: false
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Categories;
