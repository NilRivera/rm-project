import { debounce } from 'lodash';

export const setEmailAndValidate = debounce(
  (
    value: string,
    setEmail: Function,
    emailValidation:Function,
    setIsValid:Function,
  ) => {
    setEmail(value);
    setIsValid(emailValidation(value));
  },
  200,
  { trailing: true },
);
