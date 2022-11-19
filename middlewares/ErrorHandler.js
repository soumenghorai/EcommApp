let path = require("path");

const ErrorHandler = (err, req, res, next) => {
  console.log("Middleware Error Handling");
  const StatusCode = err.StatusCode || 500;
  const message = err.message || "Something went wrong";

  // res.status(StatusCode).json({
  //     success: false,
  //     message: message,
  //     StatusCode: StatusCode
  // })
  res.sendFile(path.join(__dirname + "./../views/error.html"));
};

module.exports = ErrorHandler;
