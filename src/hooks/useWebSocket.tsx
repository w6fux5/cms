import { useEffect, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const BASE_URL = 'ws://10.172.161.2:6881';

type Websocket = {
  url: string;
};

export const useWebsocket = ({ url }: Websocket) => {
  const { readyState, lastMessage } = useWebSocket(`${BASE_URL}/${url}`);
  const [receivedData, setReceivedData] = useState([]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  useEffect(() => {
    if (!lastMessage) return;
    const { data } = lastMessage;
    const jsonData = JSON.parse(data);
    setReceivedData(jsonData);
  }, [lastMessage]);

  return { connectionStatus, receivedData };
};
