import { Layout } from 'antd';

import styles from './MainLayout.module.less';

const { Header, Content } = Layout;

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Layout>
      <Header className={styles.header}>
        <h1 className="">Header</h1>
      </Header>
      <Content className={styles.content}>
        <main className={styles.main}>{children}</main>
        <div>1234</div>
      </Content>
    </Layout>
  );
};
