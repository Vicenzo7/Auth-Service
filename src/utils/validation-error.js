const AppError = require("./error-handler");
const { StatusCodes } = require("http-status-codes");

class ValidationError extends AppError {
  constructor(error) {
    let errorName = error.name;
    let explanation = [];

    error.errors.forEach((element) => {
      explanation.push(element.message);
    });

    super(errorName, StatusCodes.BAD_REQUEST, "Send valid data", explanation);
  }
}

module.exports = ValidationError;
