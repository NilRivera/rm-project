import styled from 'styled-components';

export const CharacterCardContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ isListView }) => (isListView ? '300px' : '700px')};
    height: ${({ isListView }) => (isListView ? '300px' : '362px')};
    border-radius: 10px;
    padding: 20px;
    background: url(${(props) => props.background});
    background-size: cover;
    border: 2px solid ${({ theme }) => theme.color.grey};
    &:hover {
        border: 2px solid ${({ theme, isListView }) => (isListView ? theme.color.lightOrange : theme.color.grey)};
        
    }
    @media (max-width: 767px) {
      width: 370px;
      height: 300px;
    }
`;

export const CharacterCardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 700px;
    border-radius: 10px;
    padding: ${({ isListView }) => (isListView ? '15px 22px' : '30px 45px')};;
    background-color: ${({ theme }) => theme.color.lightGrey.rgb};
    @media (max-width: 767px) {
      width: 300px;
    }
`;

export const CharacterCardTop = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const CharacterCardBottom = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top:10px;    
`;

export const CharacterCardImage = styled.img`
    width: ${({ isListView }) => (isListView ? '220px' : '40%')};
    border-radius: 10px;
    alt: ${({ alt }) => (alt || 'Image')};
    src: ${({ src }) => (src || 'https://via.placeholder.com/150')};
    
`;

export const CharacterCardPersonalData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
`;

export const CharacterCardPersonalDataFavGroup = styled.div`
    display:flex; 
    align-items: center; 
    justify-content: space-around; 
`;

export const CharacterFavButton = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    display: flex;
    align-items: center;
`;

export const CharacterFavImage = styled.img`
    width: 30px;
    margin-left: 5px;
    alt: ${({ alt }) => (alt || 'Image')};
    src: ${({ src }) => (src || 'https://via.placeholder.com/150')};
    
`;
