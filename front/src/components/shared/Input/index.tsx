import React from 'react';
import { InputStyle } from './styles';

export type InputProps = {
    type: string;
    placeholder: string;
    padding?: string;
    onChange?: Function;
    isValid?: boolean;
    hasValue?: string;
}

const Input = ({
  type, placeholder, padding, onChange, isValid, hasValue,
}:InputProps) => (
  <InputStyle
    padding={padding}
    placeholder={placeholder}
    type={type}
    isValid={isValid}
    onChange={onChange}
    hasValue={hasValue}
  />

);
export default Input;
