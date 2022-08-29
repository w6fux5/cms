import { Layout, Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useMenu, Menu as MenuType, MenuItem } from '@/stores';

import styles from './MainHeader.module.less';

const { Header } = Layout;

export const MainHeader = () => {
  const navigate = useNavigate();
  const { current, setCurrent } = useMenu();

  const clickHandler: MenuProps['onClick'] = (e) => {
    setCurrent(e.key as MenuType);
    navigate(`/cms/${e.key}`);
  };

  return (
    <Header className={styles.header}>
      <div className="logo" />
      <Menu
        className={styles.menu}
        style={{ backgroundColor: 'transparent' }}
        mode="horizontal"
        defaultSelectedKeys={[current] ?? ['overview']}
        items={MenuItem}
        onClick={clickHandler}
      />
    </Header>
  );
};
