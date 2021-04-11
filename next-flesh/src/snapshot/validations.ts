import * as yup from "yup";

export const snapshotNewValidations = yup.object().shape({
  website_url: yup.string().url().required(),
  visibility: yup.string().oneOf(["universal", "listed"]).required(),
});
