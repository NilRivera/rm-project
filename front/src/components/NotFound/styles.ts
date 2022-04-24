import styled from 'styled-components';

export const NotFoundContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;
export const NotFoundTitle = styled.span`
font-size: 4rem;
color: ${({ theme }) => theme.color.white};
text-align: center;
`;
export const NotFoundImage = styled.img`
src: ${({ src }) => src};
width:300px;    
margin-top: 20px;
`;
