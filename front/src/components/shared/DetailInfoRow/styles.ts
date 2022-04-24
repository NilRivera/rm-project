import styled from 'styled-components';

export const DetailInfoGroup = styled.div`
display: flex;
  text-align: center;
  justify-content:${({ name }) => (name ? 'center' : 'space-between')};
`;

export const SpanTitle = styled.span`
  font-weight: bold;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: ${({ name }) => name && 'underline'}  ;
  font-size: ${({ theme }) => theme.fontSize.large};
  padding: ${(props) => props.padding || '5px'};
  border: ${({ theme, isValid, hasValue }) => (!isValid && hasValue && `1px solid ${theme.color.red}`)};
  @media (max-width: 767px) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

export const TextGroup = styled.div`
  display: flex;
  align-items: center;
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
  border: ${(isValid, hasValue, theme) => (!isValid && hasValue && `1px solid ${theme.color.red}`)};
  @media (max-width: 767px) {
    font-size: ${({ theme }) => theme.fontSize.medium};
    min-width: 100px;
  }
`;
