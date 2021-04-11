import { Formik, Form } from "formik";
import LabeledTextField from "core/components/LabeledTextField";
import LabeledRadioField from "core/components/LabeledRadioField";
import { snapshotNewValidations } from "snapshot/validations";

const SnapshotNewForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ website_url: "", visibility: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={snapshotNewValidations}
    >
      <Form className="space-y-4">
        <LabeledTextField
          type="url"
          name="website_url"
          label="Website URL"
          placeholder="https://mywebsite.com"
          autoComplete="off"
        />
        <LabeledRadioField
          name="visibility"
          value="universal"
          label="Public snapshot"
          labelFor="public-snapshot"
          helpText="Anyone on the internet can see this snapshot."
        />
        <LabeledRadioField
          name="visibility"
          value="listed"
          label="Private snapshot"
          labelFor="private-snapshot"
          helpText="Only you can see this snapshot."
        />
        <button type="submit" className="btn btn-primary w-full">
          Share snapshot
        </button>
      </Form>
    </Formik>
  );
};

export default SnapshotNewForm;
