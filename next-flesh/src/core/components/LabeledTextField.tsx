import React from "react";
import { ErrorMessage, Field } from "formik";

interface LabeledTextFieldProps {
  type?: string;
  name: string;
  label?: string;
  labelFor?: string;
}

const LabeledTextField: React.FC<LabeledTextFieldProps> = ({
  name,
  label,
  labelFor,
  type = "text",
  ...props
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={labelFor || name} className="form-label">
          {label}
        </label>
      )}
      <Field
        id={labelFor || name}
        type={type}
        name={name}
        className="form-control"
        {...props}
      />
      <ErrorMessage
        name={name}
        component="p"
        className="text-sm mt-1 text-red-600 font-medium"
      />
    </div>
  );
};

export default LabeledTextField;
