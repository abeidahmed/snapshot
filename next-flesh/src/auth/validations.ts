import * as yup from "yup";

export const signinValidations = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
