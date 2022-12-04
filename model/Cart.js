module.exports = (sequelize, dbConnection) => {
  let Cart = dbConnection.define(
    "cart",
    {
      id: {
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cost: {
        type: sequelize.DataTypes.DECIMAL,
      },
    },
    {
      timestamps: false,
    }
  );
  return Cart;
};
