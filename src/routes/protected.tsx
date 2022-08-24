import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MainLayout } from '@/components';
import { lazyImport } from '@/utils/lazyImport';

// const { Home } = lazyImport(() => import('@/features/misc'), 'Home');ㄎ
const { WalletRoutes } = lazyImport(() => import('@/features/wallet'), 'WalletRoutes');
const { OverviewRoutes } = lazyImport(() => import('@/features/overview'), 'OverviewRoutes');
const { MemberRoutes } = lazyImport(() => import('@/features/member'), 'MemberRoutes');
const { AgentRoutes } = lazyImport(() => import('@/features/agent'), 'AgentRoutes');
const { InstantRoutes } = lazyImport(() => import('@/features/instant'), 'InstantRoutes');
const { TradeRoutes } = lazyImport(() => import('@/features/trade'), 'TradeRoutes');
const { ChatRoutes } = lazyImport(() => import('@/features/chat'), 'ChatRoutes');
const { ValidCodeRoutes } = lazyImport(() => import('@/features/valid-code'), 'ValidCodeRoutes');

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
      // { path: '', element: <Home /> },
      { path: 'wallet/*', element: <WalletRoutes /> },
      { path: 'overview/*', element: <OverviewRoutes /> },
      { path: 'member/*', element: <MemberRoutes /> },
      { path: 'agent/*', element: <AgentRoutes /> },
      { path: 'instant/*', element: <InstantRoutes /> },
      { path: 'trade/*', element: <TradeRoutes /> },
      { path: 'chat/*', element: <ChatRoutes /> },
      { path: 'valid-code/*', element: <ValidCodeRoutes /> },
      //   { path: '/', element: <Dashboard /> },
    ],
  },
];
