export interface ServerErrors {
  response: {
    data: {
      errors: Array<string>;
    };
  };
}
