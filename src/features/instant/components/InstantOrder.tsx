import { Table } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useWebsocket } from '@/hooks/useWebSocket';

import { columns } from '../config/table-column';

import { InstantLayout } from './InstantLayout';

const url = 'ws_liveorder.ashx';

export const InstantOrder = () => {
  const { connectionStatus, receivedData } = useWebsocket({ url });

  const navigate = useNavigate();

  console.log(connectionStatus);

  return (
    <InstantLayout title="即時訂單">
      <Table
        style={{ color: 'red' }}
        rowKey="key"
        dataSource={receivedData}
        columns={columns}
        scroll={{ x: 1500 }}
        pagination={{
          showQuickJumper: true,
          defaultPageSize: 10,
        }}
        onRow={(record) => {
          return {
            onClick: () => {
              navigate(`/cms/instant/${record.token}`);
            },
          };
        }}
      />
    </InstantLayout>
  );
};

/**
 * summary={(currentData) => <span>{currentData}</span>}
 * 
 * 
 * onRow={(record) => {
          return {
            onClick: () => {
              console.log(record.token);
            },
            // onDoubleClick: (event) => {},
            // onContextMenu: (event) => {},
            // onMouseEnter: (event) => {},
            // onMouseLeave: (event) => {},
          };
        }}
 * 
 */
