import { useEffect, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const BASE_URL = 'ws://10.172.161.2:6881';

type Websocket = {
  url: string;
  options?: any;
};

export const useWebsocket = ({ url, options }: Websocket) => {
  const { readyState, lastMessage, sendMessage } = useWebSocket(`${BASE_URL}/${url}`, {
    ...options,
  });
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

  const sendText = (value: string, orderToken: string) => {
    if (value === '' || !orderToken) {
      alert('沒有token');
      return;
    }

    sendMessage(
      JSON.stringify({
        Message_Type: 1,
        Message: value.toString(),
        token: orderToken,
      })
    );
  };
  const sendImg = async (image: string, token: string) => {
    if (!image || !token) {
      return;
    }

    try {
      sendMessage(
        JSON.stringify({
          Message_Type: 2,
          Message: image,
          token,
        })
      );
    } catch (error) {
      alert(error);
    }
  };

  return { connectionStatus, receivedData, sendText, sendImg };
};
