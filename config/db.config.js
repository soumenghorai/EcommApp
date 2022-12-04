module.exports = {
  development: {
    DB: "ecomm_db",
    USER: "root",
    PASSWORD: "password",
    HOST: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  test: {
    DB: "ecomm_test_db",
    USER: "root",
    PASSWORD: "password",
    HOST: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
