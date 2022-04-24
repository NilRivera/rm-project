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
}

const Button = ({
  text, onClick, width, height, padding, fontSize, underline, margin,
}:ButtonProps) => (
  <ButtonContainer
    width={width}
    height={height}
    padding={padding}
    underline={underline}
    fontSize={fontSize}
    onClick={onClick}
    margin={margin}
  >
    {text}
  </ButtonContainer>
);
export default Button;
