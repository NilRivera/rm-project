import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const LoginImage = styled.img`
alt: ${({ alt }) => (alt || 'Image')};
src: ${({ src }) => (src || 'https://via.placeholder.com/150')};
margin-top: 30px;
`;
