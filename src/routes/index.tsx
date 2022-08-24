import { useRoutes, Navigate } from 'react-router-dom';

import { Landing } from '@/features/misc';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const commonRoutes = [
    { path: '/', element: <Landing /> },
    { path: '*', element: <Navigate to="/" /> },
  ];

  const routes = true ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return element;
};
