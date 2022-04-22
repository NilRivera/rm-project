import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.lightGrey};
    border  : 1px solid ${({ theme }) => theme.color.black};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    font-size: ${({ fontSize }) => fontSize || '1em'};
`;
