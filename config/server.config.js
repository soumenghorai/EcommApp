if (process.env.NODE != "production") {
  require("dotenv").config();
}

module.exports = {
  PORT: process.env.PORT,
};
