import styled from 'styled-components';

export const InputStyle = styled.input`
outline: none;
padding: ${(props) => props.padding || '5px'};
font-family: 'Indie Flower', cursive;
margin-top:5px;
border: ${(props) => (!props.isValid && props.hasValue && '1px solid #ff0000')};
`;
