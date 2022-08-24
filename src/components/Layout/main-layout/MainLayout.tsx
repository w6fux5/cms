import { Layout } from 'antd';

import { MainHeader } from './MainHeader';
import styles from './MainLayout.module.less';

const { Content } = Layout;

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  console.log('layout');
  return (
    <Layout>
      <MainHeader />
      <Content className={styles.content}>
        <main className={styles.main}>{children}</main>
      </Content>
    </Layout>
  );
};
