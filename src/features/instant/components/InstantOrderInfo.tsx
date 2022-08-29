import { Descriptions, Skeleton } from 'antd';
import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';

import { useOrderInfo } from '../apis/useOrderInfo';

import { InstantLayout } from './InstantLayout';

const arr = [
  { id: nanoid(), label: '平台號', dataIndex: '' },
  { id: nanoid(), label: '剩餘支付時間', dataIndex: 'DeltaTime' },
  { id: nanoid(), label: '會員手機', dataIndex: 'Client_tel', mark: true },
  { id: nanoid(), label: '代理手機', dataIndex: 'Agent_tel' },
  { id: nanoid(), label: 'USDT', dataIndex: 'UsdtAmt' },

  { id: nanoid(), label: '來源', dataIndex: '' },
  { id: nanoid(), label: '訂單發起時間', dataIndex: 'CreateDate' },
  { id: nanoid(), label: '付款姓名', dataIndex: 'P5', mark: true },
  { id: nanoid(), label: '收款姓名', dataIndex: 'P2' },
  { id: nanoid(), label: '貨幣', dataIndex: '' },

  { id: nanoid(), label: '總價', dataIndex: 'D2' },
  { id: nanoid(), label: '付款時間', dataIndex: '' },
  { id: nanoid(), label: '付款帳號', dataIndex: '', mark: true },
  { id: nanoid(), label: '收款帳號', dataIndex: 'P1' },
  { id: nanoid(), label: '匯率', dataIndex: 'D1' },

  { id: nanoid(), label: '是否測試', dataIndex: '' },
  { id: nanoid(), label: '狀態', dataIndex: 'Order_StatusID' },
  { id: nanoid(), label: '所在省市', dataIndex: '', mark: true },
  { id: nanoid(), label: '所在省市', dataIndex: 'P4' },
  { id: nanoid(), label: '手續費', dataIndex: 'D3' },

  { id: nanoid(), label: 'HASH', dataIndex: 'Tx_HASH', span: 5 },
  { id: nanoid(), label: 'URL', dataIndex: '', span: 5 },
];

export const InstantOrderInfo = () => {
  const location = useLocation();
  const { data, isLoading } = useOrderInfo({
    token: location.pathname.split('/')[3],
  });

  const { data: responseData } = data || {};

  return (
    <InstantLayout title="訂單資訊">
      <div style={{ width: '68rem', minHeight: '50vh', position: 'relative' }}>
        <Skeleton active loading={isLoading}>
          <Descriptions
            bordered
            column={5}
            size="middle"
            labelStyle={{ fontSize: '12px', color: '#215696', fontWeight: 'bolder' }}
            contentStyle={{ fontSize: '12px' }}
          >
            {arr.map((el) => (
              <Descriptions.Item
                contentStyle={{ backgroundColor: el?.mark ? '#fffac6' : undefined }}
                key={el.id}
                label={el.label}
                span={el.span || 1}
              >
                {(responseData && responseData[el.dataIndex]) ?? ''}
              </Descriptions.Item>
            ))}
          </Descriptions>
        </Skeleton>
      </div>
    </InstantLayout>
  );
};
