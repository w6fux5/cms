import { Descriptions, Skeleton, Button } from 'antd';
import { useLocation } from 'react-router-dom';

import { Loading } from '@/components';
import { ChatWidget } from '@/features/chat';

import { useOrderInfo } from '../apis/useOrderInfo';
import { orderInfoItem, itemChildren } from '../config/order-info-item';

import { InstantLayout } from './InstantLayout';

export const InstantOrderInfo = () => {
  const location = useLocation();
  const token = location.pathname.split('/')[3];

  const { data, isFetching } = useOrderInfo({
    token,
  });

  const { data: responseData } = data || {};

  return (
    <>
      <Loading show={isFetching} mask={isFetching} />
      <div>
        <InstantLayout
          title="訂單資訊"
          style={{ width: '75%' }}
          headerStyle={{ marginBottom: '5px' }}
          returnBtn
          extra={
            <Button disabled type="primary">
              取消訂單
            </Button>
          }
        >
          <div style={{ minWidth: '65rem', height: '37rem' }}>
            <Skeleton active loading={isFetching}>
              <Descriptions
                bordered
                column={5}
                size="small"
                labelStyle={{ fontSize: '12px', color: '#215696', fontWeight: 'bolder' }}
                contentStyle={{ fontSize: '12px' }}
              >
                {orderInfoItem.map((el) => (
                  <Descriptions.Item
                    contentStyle={{ backgroundColor: el?.mark ? '#fffac6' : undefined }}
                    key={el.id}
                    label={el.label}
                    span={el.span || 1}
                  >
                    {itemChildren({ el, responseData })}
                  </Descriptions.Item>
                ))}
              </Descriptions>
            </Skeleton>
          </div>
        </InstantLayout>
        <ChatWidget token={token} />
      </div>
    </>
  );
};
