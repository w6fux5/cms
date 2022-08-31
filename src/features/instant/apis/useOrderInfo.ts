import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig, queryKeys } from '@/lib/react-query';

type OrderInfo = any;

export const getOrderInfo = ({ token }: { token: string }): Promise<OrderInfo> => {
  return axios.post('/GetTxDetail.aspx', { Token: token });
};

type QueryFnType = typeof getOrderInfo;

type UseGetOrderInfoOptions = {
  token: string;
  config?: QueryConfig<QueryFnType>;
};

export const useOrderInfo = ({ token, config }: UseGetOrderInfoOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: [queryKeys['order-info'], '/GetTxDetail.aspx'],
    queryFn: () => getOrderInfo({ token }),
    cacheTime: 0,
  });
};
