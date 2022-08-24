import { Layout, Menu, MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './MainHeader.module.less';

const { Header } = Layout;

const items = [
  { label: '總覽', key: 'overview' }, // 菜单项务必填写 key
  { label: '錢包狀態', key: 'wallet' },
  { label: '會員資料', key: 'member' },
  { label: '代理資料', key: 'agent' },
  { label: '即時訂單', key: 'instant' },
  { label: '所有交易紀錄', key: 'trade' },
  { label: '會員對話', key: 'chat' },
  { label: '驗證碼', key: 'valid-code' },
];

export const MainHeader = () => {
  const [current, setCurrent] = useState('overview');
  const navigate = useNavigate();

  const clickHandler: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    if (!current) return;
    navigate(current);
  }, [current, navigate]);
  return (
    <Header className={styles.header}>
      <div className="logo" />
      <Menu
        className={styles.menu}
        style={{ backgroundColor: 'transparent' }}
        mode="horizontal"
        defaultSelectedKeys={['overview']}
        items={items}
        onClick={clickHandler}
      />
    </Header>
  );
};
