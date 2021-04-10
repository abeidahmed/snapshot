import React from "react";
import { Formik, Form } from "formik";
import { useMutation } from "react-query";
import { signupValidations } from "auth/validations";
import { signupMutation } from "auth/mutations/signup";
import { displayFormErrors } from "core/utils/displayFormErrors";
import LabeledTextField from "core/components/LabeledTextField";

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
        <Form className="space-y-4">
          <LabeledTextField name="full_name" label="Full name" />
          <LabeledTextField name="email" type="email" label="Email address" />
          <LabeledTextField name="password" type="password" label="Password" />
          <div>
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
