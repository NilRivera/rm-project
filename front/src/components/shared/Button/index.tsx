import React from 'react';
import { ButtonContainer } from './styles';

export type ButtonProps = {
    text: string;
    onClick: () => void;
    width?: string;
    height?: string;
    padding?: string;
    underline?: boolean;
    fontSize: string;
    margin?: string;
    disabled?: boolean;
}

const Button = ({
  text, onClick,
  width,
  height,
  padding,
  fontSize,
  underline,
  margin,
  disabled,
}:ButtonProps) => (
  <ButtonContainer
    width={width}
    height={height}
    padding={padding}
    underline={underline}
    fontSize={fontSize}
    onClick={onClick}
    margin={margin}
    disabled={disabled}
  >
    {text}
  </ButtonContainer>
);
export default Button;
