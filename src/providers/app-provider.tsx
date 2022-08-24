import { Spin, ConfigProvider } from 'antd';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';

import { primaryTheme } from '@/theme';

const ErrorFallback = () => {
  return (
    <div>
      <h1>Error</h1>
    </div>
  );
};

// Antd theme
ConfigProvider.config({
  theme: {
    ...primaryTheme,
  },
});

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense
      fallback={
        <div>
          <Spin size="large" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>{children}</Router>
      </ErrorBoundary>
    </Suspense>
  );
};
