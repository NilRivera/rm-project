import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CharacterCardContainer = styled.article`
    display: flex;
    width:100%;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 70px;
    margin-top: 20px;
`;

export const CharacterCarLink = styled(Link)`
    text-decoration: none;
    color: black;
`;
