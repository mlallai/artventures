const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostersInput(data) {
  let errors = {};

  data.defaultUri = !isEmpty(data.defaultUri) ? data.defaultUri : "";
  data.smallUri = !isEmpty(data.smallUri) ? data.smallUri : "";
  data.mediumUri = !isEmpty(data.mediumUri) ? data.mediumUri : "";
  data.largeUri = !isEmpty(data.largeUri) ? data.largeUri : "";
  data.category = !isEmpty(data.category) ? data.category : "";

  if (
    Validator.isEmpty(data.defaultUri) &&
    Validator.isEmpty(data.smallUri) &&
    Validator.isEmpty(data.mediumUri) &&
    Validator.isEmpty(data.largeUri)
  ) {
    errors.noUri = "Please enter at least one Uri";
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = "Please select a category for this poster";
  }

  if (!data.units) {
    errors.units = "Please specify of maximum number of units";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
