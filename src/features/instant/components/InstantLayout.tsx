import { Typography } from 'antd';
import { ReactNode } from 'react';

type InstantLayoutProps = {
  children: ReactNode;
  title: string;
  style?: React.CSSProperties;
};

const defaultProps = {
  style: {},
};

export const InstantLayout = ({ children, title, style }: InstantLayoutProps) => {
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
      <Typography.Title type="secondary" level={5} style={{ fontSize: '12px' }}>
        {title}
      </Typography.Title>
      {children}
    </section>
  );
};

InstantLayout.defaultProps = defaultProps;
