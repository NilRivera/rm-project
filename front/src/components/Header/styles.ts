import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/media/logo.png';

export const HeaderStyle = styled.div`
    display: ${(props) => (props.display ? props.display : 'flex')};
    height: 50px;
    justify-content: space-between;
    background-color:${({ theme }) => theme.color.white};
    align-items: center;
    margin-bottom: 80px;
`;

export const LinkGroup = styled.div`
    display: flex;
`;

export const CharacterListLink = styled(Link)`
    background: none;
    padding: 8px;
    width:50px;
    text-align: center;
    margin-right: 10px;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.black};
    border: 1px solid ${({ theme }) => theme.color.black};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const LogoutLink = styled(Link)`
   background: none;
    padding: 8px;
    width:50px;
    margin-right: 10px;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.black};
    border: 1px solid ${({ theme }) => theme.color.black};
    text-decoration: none;

`;

export const Logo = styled(Link)`
width:40px;
height:40px;
border-radius:50%;
margin-left:10px;
border:2px solid #000;

background-image: url(${logo});
background-size: cover;
`;
