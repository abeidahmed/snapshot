import * as yup from "yup";

export const snapshotNewValidations = yup.object().shape({
  website_url: yup
    .string()
    .url("Website URL must be a valid URL")
    .required("Website URL is required"),
  visibility: yup.string().oneOf(["universal", "listed"]).required(),
});
