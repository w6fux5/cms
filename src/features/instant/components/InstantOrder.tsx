import { Table } from 'antd';

import { useWebsocket } from '@/hooks/useWebSocket';

import { columns } from '../config/table-column';

import { InstantLayout } from './InstantLayout';

const url = 'ws_liveorder.ashx';

export const InstantOrder = () => {
  const { connectionStatus, receivedData } = useWebsocket({ url });

  return (
    <InstantLayout title="即時訂單">
      <Table
        rowKey="token"
        loading={connectionStatus === 'Connecting'}
        dataSource={receivedData}
        columns={columns}
        size="small"
        scroll={{ x: 1500 }}
        pagination={{
          showQuickJumper: true,
          defaultPageSize: 10,
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
