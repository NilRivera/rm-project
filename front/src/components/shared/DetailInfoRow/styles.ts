import styled from 'styled-components';

export const DetailInfoGroup = styled.div`
display: flex;
justify-content:${({ name }) => (name ? 'center' : 'space-between')};
`;

export const SpanTitle = styled.span`
font-weight: bold;
margin-right: 10px;
display: flex;
justify-content: center;
font-size: ${({ theme }) => theme.fontSize.large};
padding: ${(props) => props.padding || '5px'};
border: ${(props) => (!props.isValid && props.hasValue && '1px solid #ff0000')};
`;

export const SpanInfo = styled.span`
background-color: ${({ theme, status, title }) => {
    if (status) {
      return (status && status === 'Alive' && title === 'Status' ? theme.color.green : theme.color.red);
    }
    return theme.color.white;
  }};
display: flex;
justify-content: center;    
padding:1px;
min-width: 130px;
border-radius: 5px;
font-size: ${({ theme }) => theme.fontSize.medium};
border: ${(props) => (!props.isValid && props.hasValue && '1px solid #ff0000')};
`;
