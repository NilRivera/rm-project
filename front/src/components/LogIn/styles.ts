import styled from 'styled-components';

export const LogInContainer = styled.div` 
    width: 400px;
    height: 300px;
    padding: 10px;
    display: flex;
    background: url(${(props) => props.background});
    background-size: cover;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.color.grey};
    margin-top: 100px;
    @media (max-width: 450px) {
      width: 300px;
      height: 200px;
    }
`;

export const LogInContent = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(255, 255, 255, .9);
border-radius: 10px;
padding: 10px;

@media (max-width: 450px) {
    padding: 0px;
    }
`;

export const LogInTitle = styled.h1`
text-align: center;
margin: 0;
`;

export const LogInForm = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const LoginIcon = styled.img`
width: 80px;
padding: 10px;
alt: ${({ alt }) => (alt || 'Image')};
src: ${({ src }) => (src || 'https://via.placeholder.com/150')};
`;

export const InputGroup = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;

export const ButtonGroup = styled.div` 
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
`;

export const Input = styled.input`


`;
