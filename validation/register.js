const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.street = !isEmpty(data.street) ? data.street : "";
  data.zipCode = !isEmpty(data.zipCode) ? data.zipCode : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "Name field is required";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  //   if (!data.number) {
  //     errors.number = "Number field is required";
  //   }

  if (Validator.isEmpty(data.street)) {
    errors.street = "Street field is required";
  }
  if (Validator.isEmpty(data.zipCode)) {
    errors.zipCode = "ZipCode field is required";
  }
  if (Validator.isEmpty(data.city)) {
    errors.city = "City field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
