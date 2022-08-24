import { Route, Routes } from 'react-router-dom';

import { Wallet } from './Wallet';

export const WalletRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Wallet />} />
    </Routes>
  );
};
