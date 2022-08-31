import { nanoid } from 'nanoid';

import { getOrderStatus, formatP5 } from '.';

export const orderInfoItem = [
  { id: nanoid(), label: '平台號', dataIndex: '' },
  { id: nanoid(), label: '剩餘支付時間', dataIndex: 'DeltaTime' },
  { id: nanoid(), label: '會員手機', dataIndex: 'Client_tel', mark: true },
  { id: nanoid(), label: '代理手機', dataIndex: 'Agent_tel' },
  { id: nanoid(), label: 'USDT', dataIndex: 'UsdtAmt' },

  { id: nanoid(), label: '來源', dataIndex: 'BVAC_ClientName' },
  { id: nanoid(), label: '訂單發起時間', dataIndex: 'CreateDate' },
  { id: nanoid(), label: '付款姓名', dataIndex: 'P5', mark: true },
  { id: nanoid(), label: '收款姓名', dataIndex: 'P2' },
  { id: nanoid(), label: '貨幣', dataIndex: '' },

  { id: nanoid(), label: '交易類別', dataIndex: '' },
  { id: nanoid(), label: '配對時間', dataIndex: '' },
  { id: nanoid(), label: '付款帳號', dataIndex: 'P5', mark: true },
  { id: nanoid(), label: '收款帳號', dataIndex: 'P1' },
  { id: nanoid(), label: '金額', dataIndex: 'D2' },

  { id: nanoid(), label: '訂單號', dataIndex: '' },
  { id: nanoid(), label: '付款時間', dataIndex: '' },
  { id: nanoid(), label: '銀行代碼', dataIndex: 'P5', mark: true },
  { id: nanoid(), label: '銀行代碼', dataIndex: 'P3' },
  { id: nanoid(), label: '匯率', dataIndex: 'D1' },

  { id: nanoid(), label: '是否測試', dataIndex: '' },
  { id: nanoid(), label: '狀態', dataIndex: 'Order_StatusID' },
  { id: nanoid(), label: '所在省市', dataIndex: '', mark: true },
  { id: nanoid(), label: '所在省市', dataIndex: '' },
  { id: nanoid(), label: '手續費', dataIndex: 'D3' },

  { id: nanoid(), label: 'HASH', dataIndex: 'Tx_HASH', span: 5 },
  { id: nanoid(), label: 'URL', dataIndex: '', span: 5 },
];

type ItemType = {
  id: string;
  label: string;
  dataIndex: string;
  mark?: boolean;
  span?: number;
};

interface ItemChildren {
  el: ItemType;
  responseData: any;
}

export const itemChildren = ({ el, responseData }: ItemChildren): string => {
  if (!responseData) return '';

  if (el.dataIndex === 'Order_StatusID') {
    const id = responseData[el.dataIndex];
    return getOrderStatus(id).props.children;
  }

  if (el.label === '付款帳號' && el.dataIndex === 'P5') {
    const item = responseData[el.dataIndex];
    const { account } = formatP5(item);
    return account;
  }

  if (el.label === '銀行代碼' && el.dataIndex === 'P5') {
    const item = responseData[el.dataIndex];
    const { bank } = formatP5(item);
    return bank;
  }

  if (el.label === '付款姓名' && el.dataIndex === 'P5') {
    const item = responseData[el.dataIndex];
    const { name } = formatP5(item);
    return name;
  }
  return (responseData && responseData[el.dataIndex]) ?? '';
};
