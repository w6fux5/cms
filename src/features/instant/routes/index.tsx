import { Route, Routes } from 'react-router-dom';

import { Instant } from './Instant';

export const InstantRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Instant />} />
    </Routes>
  );
};
