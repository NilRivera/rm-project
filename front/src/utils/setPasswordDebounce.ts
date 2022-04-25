import { debounce } from 'lodash';

export const setPasswordDebounce = debounce(
  (
    value: string,
    setPassword: Function,
  ) => {
    setPassword(value);
  },
  200,
  { trailing: true },
);
