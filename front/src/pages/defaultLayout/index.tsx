import React, { ReactNode } from 'react';
import { Layout } from './styles';

type GlobalLayoutProps = {
    children: ReactNode;
}
const GlobalLayout: React.FunctionComponent<GlobalLayoutProps> = ({ children }) => (
  <Layout>
    {children}
  </Layout>
);

export default GlobalLayout;
