export interface errorsApiType {
  fullMessages: Array<string>;
  errors: Array<string>;
  base: Array<string>;
}

const parseErrors = (errors: any) => {
  if (errors) {
    const { fullMessages, base } = errors;

    if (fullMessages) {
      const [firstMessage] = fullMessages;
      return firstMessage;
    }

    if (base) {
      const [firstMessage] = base;
      return firstMessage;
    }

    if (Array.isArray(errors)) {
      return errors[0];
    }
    return errors;
  }
  return 'Something went wrong';
};

export default (data: any) => {
  if (!data) return 'Something went wrong';

  const { error, errors } = data;

  if (error) return error;

  return parseErrors(errors);
};
