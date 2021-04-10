import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "react-query";
import { signupValidations } from "auth/validations";
import { signupMutation } from "auth/mutations/signup";
import { displayFormErrors } from "core/utils/displayFormErrors";

const SignupForm: React.FC = () => {
  const { mutateAsync } = useMutation(signupMutation);

  return (
    <Formik
      initialValues={{ full_name: "", email: "", password: "" }}
      onSubmit={async (values, { setSubmitting, setFieldError }) => {
        setSubmitting(true);
        try {
          const res = await mutateAsync(values);
          console.log(res);
        } catch (error) {
          displayFormErrors(error.response.data.errors, setFieldError);
        } finally {
          setSubmitting(false);
        }
      }}
      validationSchema={signupValidations}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="full_name" className="form-label">
              Full name
            </label>
            <Field
              type="text"
              id="full_name"
              name="full_name"
              className="form-control"
            />
            <ErrorMessage name="full_name" component="p" />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="form-control"
            />
            <ErrorMessage name="email" component="p" />
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <p className="text-sm text-gray-600 ml-1">(min. 6 characters)</p>
            </div>
            <Field
              type="password"
              id="password"
              name="password"
              className="form-control"
            />
            <ErrorMessage name="password" component="p" />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full"
            >
              Create an account
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
