import { AppProvider } from '@/providers';
import { AppRoutes } from '@/routes';

export const App = () => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);
