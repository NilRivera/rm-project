import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import GlobalStyle from './styles/global';
import Router from './routes';
import Header from './components/Header';
import LogIn from './components/LogIn';
import GlobalLayout from './pages/defaultLayout';
import { useGetLocalStorage } from './global/hooks/useGetLocalStorage';
import withLoading from './hoc/withLoading';
import literals from './global/literals';

const PrivateRoutes = ({ children }:any):any => {
  const location = useLocation();
  const { user } = useGetLocalStorage(literals.user);
  useEffect(() => {}, [location]);
  if (!user) {
    return <GlobalLayout><LogIn /></GlobalLayout>;
  }
  return (
    children
  );
};

const App: React.FunctionComponent<any> = () => (
  <>
    <GlobalStyle />
    <Header />
    <PrivateRoutes><Router /></PrivateRoutes>
  </>
);

export default withLoading(App);
