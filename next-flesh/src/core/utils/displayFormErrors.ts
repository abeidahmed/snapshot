export const displayFormErrors = (
  errors: { [key: string]: string[] },
  callback: (errorType: string, message: string) => void
) => {
  for (const errorType of Object.keys(errors)) {
    callback(errorType, `${errorType} ${errors[errorType]}`);
  }
};
