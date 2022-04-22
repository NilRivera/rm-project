import React from 'react';
import { ButtonContainer } from './styles';

export type ButtonProps = {
    text: string;
    onClick: () => void;
    width?: string;
    height?: string;
    padding?: string;
    fontSize: string;
}

const Button = ({
  text, onClick, width, height, padding, fontSize,
}:ButtonProps) => (
  <ButtonContainer
    width={width}
    height={height}
    padding={padding}
    fontSize={fontSize}
    onClick={onClick}
  >
    {text}
  </ButtonContainer>
);
export default Button;
