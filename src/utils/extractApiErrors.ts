import { DeepMap, FieldError, FieldValues } from 'react-hook-form';
import capitalizeFirstLetter from './capitalizeFirstLetter';

type FieldErrors<TFieldValues extends FieldValues = FieldValues> = DeepMap<
  TFieldValues,
  FieldError
>;

const extractApiErrors = ({
  apiErrors,
  formErrors,
  errorToExtract = ''
}: {
  formErrors: FieldErrors;
  apiErrors: { [key: string]: string[] };
  errorToExtract?: string;
}) => {
  if (typeof apiErrors !== 'undefined') {
    if (typeof apiErrors !== 'object' && apiErrors && !errorToExtract) {
      return apiErrors;
    }

    if (typeof apiErrors[errorToExtract] !== 'undefined') {
      return `${capitalizeFirstLetter(errorToExtract)} ${
        apiErrors[errorToExtract][0]
      }`;
    }
  }

  if (formErrors[errorToExtract]) {
    const error = formErrors[errorToExtract];
    return error.message;
  }

  return '';
};

export default extractApiErrors;
