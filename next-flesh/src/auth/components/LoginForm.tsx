import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signinValidations } from "auth/validations";

const LoginForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={signinValidations}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <Field
              id="email"
              type="email"
              name="email"
              className="form-control"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-sm mt-1 text-red-600 font-medium"
            />
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <a href="/" className="link-primary">
                Forgot password?
              </a>
            </div>
            <Field
              id="password"
              type="password"
              name="password"
              className="form-control"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-sm mt-1 text-red-600 font-medium"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full"
            >
              Sign in
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
