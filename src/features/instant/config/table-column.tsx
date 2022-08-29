import type { ColumnsType } from 'antd/es/table';

interface LiveOrderReceivedData {
  Agent: string;
  CreateDate: string;
  Currency: string;
  OrderType: number;
  Order_StatusID: number;
  StatusDesc: string;
  Title: string;
  UsdtAmt: number;
  User: string;
  token: string;
}

const getOrderStat = (Order_StatusID: number) => {
  switch (Order_StatusID) {
    case 1:
      return <span>交易成功</span>;
    case 31:
      return <span>配對中</span>;
    case 33:
      return <span>等待付款</span>;
    case 34:
      return <span>等待收款</span>;
    case 35:
      return <span>申訴</span>;
    case 98:
      return <span>交易超時</span>;
    case 99:
      return <span>交易取消</span>;

    default:
      return <span>null</span>;
  }
};

const getOrderType = (OrderType: number) => {
  switch (OrderType) {
    case 0:
      return <span>買</span>;
    case 1:
      return <span>賣</span>;
    case 2:
      return <span>轉出</span>;
    case 3:
      return <span>轉入</span>;
    default:
      return <span>null</span>;
  }
};

export const columns: ColumnsType<LiveOrderReceivedData> = [
  {
    title: '平台號',
    dataIndex: 'Title',
    key: 'Title',
    filters: [
      {
        text: <span>London</span>,
        value: 'London',
      },
      {
        text: <span>New York</span>,
        value: 'New York',
      },
    ],
  },
  {
    title: '來源',
    dataIndex: 'source',
    key: 'source',
  },
  {
    title: '交易類別',
    dataIndex: 'OrderType',
    key: 'OrderType',
    render: (OrderType) => getOrderType(OrderType),
  },
  {
    title: '訂單發起時間',
    dataIndex: 'CreateDate',
    key: 'orderTime',
  },
  {
    title: '配對時間',
    dataIndex: 'pairTime',
    key: 'pairTime',
  },
  {
    title: '剩餘支付時間',
    dataIndex: 'remainingTime',
    key: 'remainingTime',
  },
  {
    title: '付款時間',
    dataIndex: 'payTime',
    key: 'payTime',
  },
  {
    title: '會員手機',
    dataIndex: 'User',
    key: 'address',
  },
  {
    title: '代理手機',
    dataIndex: 'Agent',
    key: 'Agent',
  },
  {
    title: 'USDT',
    dataIndex: 'UsdtAmt',
    key: 'UsdtAmt',
  },
  {
    title: '貨幣',
    dataIndex: 'Currency',
    key: 'Currency',
  },
  {
    title: '金額',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: '狀態',
    dataIndex: 'Order_StatusID',
    key: 'Order_StatusID',
    render: (Order_StatusID) => getOrderStat(Order_StatusID),
  },
  {
    title: '訊息',
    dataIndex: 'message',
    key: 'message',
  },
  {
    title: '是否測試',
    dataIndex: 'isTest',
    key: 'isTest',
  },
];
