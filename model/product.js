module.exports = (sequelize, dbConnection) => {
  let Products = dbConnection.define(
    "products",
    {
      id: {
        primaryKey: true,
        notNull: true,
        autoIncrement: true,
        type: sequelize.DataTypes.BIGINT,
      },
      name: {
        notNull: true,
        type: sequelize.DataTypes.STRING,
      },
      price: {
        notNull: true,
        type: sequelize.DataTypes.BIGINT,
      },
    },
    {
      timestamps: false,
    }
  );
  return Products;
}




