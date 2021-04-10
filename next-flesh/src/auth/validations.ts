import * as yup from "yup";

const email = yup
  .string()
  .email("Email must be valid")
  .required("Email is required");

export const signinValidations = yup.object().shape({
  email,
  password: yup.string().required("Password is required"),
});

export const signupValidations = yup.object().shape({
  email,
  password: yup
    .string()
    .min(6, "Password is too short (min 6 characters)")
    .max(72, "Password is too long (max 72 characters)")
    .required("Password is required"),
  full_name: yup
    .string()
    .max(255, "Full name is too long (max 255 characters)")
    .required("Full name is required"),
});
