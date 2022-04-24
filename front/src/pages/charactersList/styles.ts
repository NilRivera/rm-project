import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CharacterCardContainer = styled.article`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 70px;
`;

export const CharacterCarLink = styled(Link)`
    text-decoration: none;
    color: black;
`;
