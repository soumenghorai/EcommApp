let dbConnection = require("./../config/db.config");
const sequelize = require("sequelize");

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

module.exports = Cart;