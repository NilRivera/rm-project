import styled from 'styled-components';

export const CharacterCardContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 700px;
    border-radius: 10px;
    padding: 20px;
    background: url(${(props) => props.background});
    background-size: cover;
    margin-top: 100px;
    border: 2px solid ${({ theme }) => theme.color.grey};
`;

export const CharacterCardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    padding: 30px 45px;
    background-color: ${({ theme }) => theme.color.lightGrey.rgb};
`;

export const CharacterCardTop = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export const CharacterCardImage = styled.img`
    width: 220px;
    border-radius: 10px;
    alt: ${({ alt }) => (alt || 'Image')};
    src: ${({ src }) => (src || 'https://via.placeholder.com/150')};
`;

export const CharacterCardPersonalData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;
