import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import GlobalStyle from './styles/global';
import './App.css';
import Router from './routes';
import Header from './components/Header';
import LogIn from './components/LogIn';
import GlobalLayout from './pages/defaultLayout';
import { useGetLocalStorage } from './utils/useGetLocalStorage';

const PrivateRoutes = ({ children }:any):any => {
  const location = useLocation();
  const { user } = useGetLocalStorage('user', location);
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

export default App;
