import { Route, Routes } from 'react-router-dom';

import { Member } from './Member';

export const MemberRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Member />} />
    </Routes>
  );
};
