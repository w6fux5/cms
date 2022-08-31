import { RollbackOutlined } from '@ant-design/icons';
import { Typography, Space, Button } from 'antd';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type InstantLayoutProps = {
  children: ReactNode;
  title?: string;
  style?: React.CSSProperties;
  extra?: ReactNode;
  headerStyle?: React.CSSProperties;
  returnBtn?: ReactNode;
};

const defaultProps = {
  style: {},
  headerStyle: {},
  extra: null,
  returnBtn: null,
  title: '',
};

export const InstantLayout = ({
  children,
  title,
  style,
  extra,
  headerStyle,
  returnBtn,
}: InstantLayoutProps) => {
  const navigate = useNavigate();
  return (
    <section
      style={{
        backgroundColor: 'white',
        padding: '5px 10px',
        marginBottom: '2rem',
        borderRadius: '5px',
        boxShadow: '1px 2px 4px 1px rgba(208, 216, 243, 0.6)',
        overflow: 'scroll',
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          ...headerStyle,
        }}
      >
        <Typography.Title type="secondary" level={5} style={{ fontSize: '12px' }}>
          <Space>
            {title}

            {returnBtn && (
              <Button type="link" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
                <Space>
                  <RollbackOutlined />
                  <span>返回</span>
                </Space>
              </Button>
            )}
          </Space>
        </Typography.Title>
        {extra}
      </div>
      {children}
    </section>
  );
};

InstantLayout.defaultProps = defaultProps;
