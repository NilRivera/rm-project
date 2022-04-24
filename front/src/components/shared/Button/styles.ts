import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: ${({ padding }) => (padding || '0')};
    font: inherit;
    cursor: pointer;
    outline: inherit;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
    background-color: ${({ theme }) => theme.color.lightGrey.rgb};
    border  : 1px solid ${({ theme }) => theme.color.black};
    width: ${({ width }) => width || 'auto'};
    height: ${({ height }) => height};
    font-size: ${({ fontSize }) => fontSize || '1em'};
    margin: ${({ margin }) => margin || '0'};
    &:hover {
        border: 1px solid ${({ theme }) => theme.color.red};
    }
    &:active {
        background-color: ${({ theme }) => theme.color.lightOrange};
    }
`;
