let serverConfig = require("./config/server.config");
const expressApp = require("./app");


expressApp.listen(serverConfig.PORT, () => {
  console.log("server is running on port " + serverConfig.PORT);

});
