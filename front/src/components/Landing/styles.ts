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
@media (max-width: 767px) {
    font-size: 2rem;
}
`;

export const LandingImage = styled.img`
src: ${({ src }) => src};
width:80%;    
@media (max-wid: 767px) {
    width:200px;
}
`;
