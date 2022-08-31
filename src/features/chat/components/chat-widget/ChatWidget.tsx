import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  MessageSeparator,
  Avatar,
} from '@chatscope/chat-ui-kit-react';
import { Image } from 'antd';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { useState, useRef, ChangeEvent, useEffect } from 'react';

import agentImage from '@/assets/代理.jpg';
import memberImage from '@/assets/會員.jpg';
import { useWebsocket } from '@/hooks/useWebSocket';
import { resizeFile } from '@/utils';

import styles from './ChatWidget.module.less';

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

const url = 'ws_backchat.ashx';

type MessageType = {
  Message: string;
  Message_Role: number;
  Message_Type: number;
  Sysdate: string;
  Tx_HASH: string;
  token: string;
  id: string;
};

type ChatWidgetProps = {
  token: string;
};

const getAvatar = (role: number): string => {
  switch (role) {
    case 1:
      return memberImage;

    case 3:
      return agentImage;

    default:
      return 'https://joeschmoe.io/api/v1/random';
  }
};

export const ChatWidget = ({ token }: ChatWidgetProps) => {
  const [messageList, setMessageList] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const options = {
    onMessage: (message: WebSocketEventMap['message']) => {
      const dataFromServer = JSON.parse(message.data);
      if (dataFromServer.token !== token) return;
      setMessageList((prev) => [...prev, { ...dataFromServer, id: nanoid() }]);
    },
  };
  const { sendText, sendImg, receivedData } = useWebsocket({ url, options });

  const handleSendText = (message: string) => {
    sendText(message, token);
  };

  const handleImageChange = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.files) return;
    setLoading(true);

    const image = (await resizeFile(target.files[0])) as string;
    sendImg(image, token);
  };

  useEffect(() => {
    setLoading(false);
  }, [receivedData]);

  return (
    <>
      <div className={styles.container}>
        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Content userName="Chat" info="" />
            <ConversationHeader.Actions>
              <button type="button">關閉</button>
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList scrollBehavior="smooth" loading={loading}>
            <MessageList.Content>
              <MessageSeparator content={dayjs().format('YYYY-MM-DD')} />
              {messageList.map((message) => {
                const {
                  Message_Role: role,
                  Message: msg,
                  Sysdate,
                  id,
                  Message_Type: messageType,
                } = message;

                const direction = role === 2 ? 'outgoing' : 'incoming';
                const avatar = getAvatar(role);
                const timer = Sysdate.split(' ')[1].split(':').slice(0, -1).join(':');

                if (messageType === 2) {
                  return (
                    <Message
                      type="custom"
                      key={id}
                      model={{
                        direction,
                        position: 'single',
                      }}
                    >
                      <Message.CustomContent>
                        <Image width={200} src={msg} />
                      </Message.CustomContent>
                      <Avatar src={avatar} name="" />
                      <Message.Footer sentTime={timer} />
                    </Message>
                  );
                }

                return (
                  <Message
                    key={id}
                    model={{
                      message: msg,
                      direction,
                      position: 'single',
                    }}
                  >
                    <Avatar src={avatar} name="" />
                    <Message.Footer sentTime={timer} />
                  </Message>
                );
              })}
            </MessageList.Content>
          </MessageList>

          <MessageInput
            onSend={(message) => {
              handleSendText(message);
            }}
            onAttachClick={() => {
              if (!inputRef.current) return;
              inputRef.current.click();
            }}
            placeholder="Type message here"
          />
        </ChatContainer>
      </div>

      <input style={{ display: 'none' }} ref={inputRef} type="file" onChange={handleImageChange} />
    </>
  );
};
