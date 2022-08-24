import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Overview } from './Overview';

export const OverviewRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Overview />} />
    </Routes>
  );
};
