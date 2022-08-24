import { Spin } from 'antd';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const { Home } = lazyImport(() => import('@/features/misc'), 'Home');

const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="">
            <Spin size="large" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
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
