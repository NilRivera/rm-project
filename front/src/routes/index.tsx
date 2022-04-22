import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalLayout from '../pages/defaultLayout';
import routes from './routes';

const Router: React.FunctionComponent = () => (
  <Routes>

    {/* Rutas en el routes.tsx */}
    {Object.entries(routes).map(
      ([route, {
        url, Element,
      }]) => (
        <Route
          path={url}
          key={route}
          element={<GlobalLayout><Element /></GlobalLayout>}
        />
      ),

    )}
  </Routes>
);

export default Router;
