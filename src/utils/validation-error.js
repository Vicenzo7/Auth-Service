const AppError = require("./error-handler");
const { StatusCodes } = require("http-status-codes");

class ValidationError extends AppError {
  constructor(error) {
    let errorName = error.name;
    let explanation = [];

    error.errors.forEach((element) => {
      explanation.push(element.message);
    });

    super(errorName, "Send valid data", explanation, StatusCodes.BAD_REQUEST);
  }
}

module.exports = ValidationError;
