import { Route, Routes } from 'react-router-dom';

import { Trade } from './Trade';

export const TradeRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Trade />} />
    </Routes>
  );
};
