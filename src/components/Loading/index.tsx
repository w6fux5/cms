import { Spin } from 'antd';

type LoadingProps = {
  mask?: boolean;
  show: boolean;
};

const defaultProps = {
  mask: false,
};

export const Loading = ({ mask, show }: LoadingProps) => {
  return (
    <div
      style={{
        display: show ? 'flex' : 'none',
        justifyContent: 'center',
        paddingTop: '25rem',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: mask ? 'rgb(255,255,255,30%)' : undefined,
      }}
    >
      <Spin size="large" tip="loading..." delay={500} />
    </div>
  );
};

Loading.defaultProps = defaultProps;
