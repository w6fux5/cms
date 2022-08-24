import { Route, Routes } from 'react-router-dom';

import { ValidCode } from './ValidCode';

export const ValidCodeRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<ValidCode />} />
    </Routes>
  );
};
