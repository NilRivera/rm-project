import styled from 'styled-components';

export const LandingContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;
export const LandingTitle = styled.span`
font-size: 4rem;
color: ${({ theme }) => theme.color.white};
text-align: center;
`;
export const LandingImage = styled.img`
src: ${({ src }) => src};
width:700px;    
`;
