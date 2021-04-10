import * as yup from "yup";

const email = yup.string().email().required();

export const signinValidations = yup.object().shape({
  email,
  password: yup.string().required(),
});

export const signupValidations = yup.object().shape({
  email,
  password: yup.string().max(72).required(),
  full_name: yup.string().max(255).required(),
});
