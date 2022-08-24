import { Button, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

export const Home = () => {
  return (
    <div>
      <h1 className="table-title">Home</h1>
      <Button type="primary">test</Button>
      <Text type="success">Ant Design (secondary)</Text>
      <Text type="danger">Ant Design (danger)</Text>
    </div>
  );
};
