import { Route, Routes } from 'react-router-dom';

import { Rate, InstantOrder, InstantOrderInfo } from '../components';

export const InstantRoutes = () => {
  return (
    <>
      <Rate />
      <Routes>
        <Route index element={<InstantOrder />} />
        <Route path="/:token" element={<InstantOrderInfo />} />
      </Routes>
    </>
  );
};
