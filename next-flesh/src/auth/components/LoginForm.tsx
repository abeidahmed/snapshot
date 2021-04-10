import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "react-query";
import { signinValidations } from "auth/validations";
import { loginMutation } from "auth/mutations/login";
import LabeledTextField from "core/components/LabeledTextField";

const LoginForm: React.FC = () => {
  const [formError, setFormError] = useState<string>("");
  const { mutateAsync } = useMutation(loginMutation);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        setFormError("");
        try {
          const res = await mutateAsync(values);
          console.log(res);
        } catch (error) {
          setFormError("Invalid email or password");
        } finally {
          setSubmitting(false);
        }
      }}
      validationSchema={signinValidations}
    >
      {({ isSubmitting }) => (
        <Form>
          <LabeledTextField name="email" label="Email address" />
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
          {formError && <p className="form-error">{formError}</p>}
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
