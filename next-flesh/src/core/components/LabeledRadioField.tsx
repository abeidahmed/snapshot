import { Field } from "formik";

interface LabeledRadioFieldProps extends React.HTMLProps<HTMLSelectElement> {
  helpText?: string;
  name: string;
  label: string;
  labelFor?: string;
}

const LabeledRadioField: React.FC<LabeledRadioFieldProps> = ({
  name,
  helpText,
  label,
  labelFor,
  ...props
}) => {
  return (
    <div className="flex">
      <Field
        type="radio"
        name={name}
        id={labelFor || name}
        className="mt-1 text-rose-500 focus:ring-rose-500"
        {...props}
      />
      <div className="ml-2">
        <label
          htmlFor={labelFor || name}
          className="inline-block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        {helpText && <p className="text-xs text-gray-600">{helpText}</p>}
      </div>
    </div>
  );
};

export default LabeledRadioField;
