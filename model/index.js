let db = {};

db.roles = require("./Roles");
db.user = require("./User");

db.roles.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId",
});

db.user.belongsToMany(db.roles, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId",
});

db.Roles = ["user", "admin"];

module.exports = db;