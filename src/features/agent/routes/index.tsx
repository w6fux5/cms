import { Route, Routes } from 'react-router-dom';

import { Agent } from './Agent';

export const AgentRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Agent />} />
    </Routes>
  );
};
