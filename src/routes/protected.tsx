import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MainLayout } from '@/components';
import { lazyImport } from '@/utils/lazyImport';

const { Home } = lazyImport(() => import('@/features/misc'), 'Home');

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div style={{ backgroundColor: 'blue' }}>
            <h1>Loading...</h1>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: '/cms',
    element: <App />,
    children: [
      { path: '/cms', element: <Home /> },
      //   { path: '/users', element: <Users /> },
      //   { path: '/profile', element: <Profile /> },
      //   { path: '/', element: <Dashboard /> },
    ],
  },
];
