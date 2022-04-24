import styled from 'styled-components';

export const LoadingLayout = styled.div`
    background-color:  ${({ theme }) => theme.color.lightGrey.hex};
    position: absolute;
    width: 100vw;
    height: 100vh;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoadingImage = styled.img`
 width: 200px;
 src: ${({ src }) => src};
 transform-origin: 50% 50%;
 animation: spinner 2s linear infinite;
 display: block;
 @keyframes spinner {
  0% {
    transform:  rotate(0deg);
  }
  100% {
    transform:  rotate(360deg);
  }
}
`;

export const LoadingTitle = styled.span`
font-size: ${({ theme }) => theme.fontSize.large};
`;
