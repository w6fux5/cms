import { Statistic, Typography, Space } from 'antd';

import { InstantLayout } from './InstantLayout';

type Platform = {
  name: string;
  buy: number;
  sell: number;
};

type PlatformArr = Platform[];

const platform: PlatformArr = [
  { name: 'K100U', buy: 1234.34, sell: 34322.12 },
  { name: '88U', buy: 34344.21, sell: 6322.53 },
  { name: 'JP88', buy: 937.34, sell: 56214.123 },
];

export const Rate = () => {
  return (
    <InstantLayout title="匯率">
      <Space size={20}>
        {platform.map((p, index) => (
          <Space key={p.name} size={20} style={{}}>
            <Space direction="vertical" size={0} style={{}}>
              <Typography.Text strong>{p.name}</Typography.Text>
              <Space size={20}>
                <Statistic
                  valueStyle={{ fontSize: '5px', color: '#3bbf2a' }}
                  title={<Typography.Text type="success">買入</Typography.Text>}
                  value={p.buy}
                />
                <Statistic
                  valueStyle={{ fontSize: '5px', color: '#bf2a2a' }}
                  title={<Typography.Text type="danger">賣出</Typography.Text>}
                  value={p.sell}
                />
              </Space>
            </Space>

            {platform.length - 1 !== index && (
              <div style={{ width: '2px', height: '3.5rem', backgroundColor: '#d9d9d9' }} />
            )}
          </Space>
        ))}
      </Space>
    </InstantLayout>
  );
};
