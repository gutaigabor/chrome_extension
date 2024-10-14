/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMessage, setMessages, setMessagesRead, useGetMessagesQuery } from '../reducers/messages';
import { RootState } from '../store';
import { Message, UnreadCount } from '../interfaces/Message';
import { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { MessageItem } from '../components/MessageItem';
import { NoMessage } from '../components/NoMessage';
import { LoadingPage } from './Loading';
import { ErrorPage } from './Error';
import { ActiveMessage } from './ActiveMessage';
import { NavBar } from '../components/NavBar';

interface Props {
  setInSettings: (value: boolean) => void;
}

export const Messages = (props: Props) => {
  const { setInSettings } = props;

  const dispatch = useDispatch();

  const { data, error, isLoading, refetch } = useGetMessagesQuery();

  const [selectedMessages, setSelectedMessages] = useState<Array<string>>([]);
  const [unreadCount, setUnreadCount] = useState<number>(0);

  const messages = useSelector<RootState, Array<Message>>(state => state.messages.messages);
  const activeMessage = useSelector<RootState, Message | undefined>(state => state.messages.activeMessage);

  // Listen to chrome local storage for background changes on new messages
  // and remove listener on component close
  useEffect(() => {
    chrome.storage.local.onChanged.addListener(logStorageChange);

    return chrome.storage.onChanged.removeListener(logStorageChange);
  }, []);

  // This effect is only used because of the ock BE.
  // If an update endpoint would be present it would be possible to make messages read without state managment,
  // using the BE and refetch. 
  useEffect(() => {
    if (data) {
      dispatch(setMessages(data));
    }
  }, [data]);

  // Set the extension icon badge when messages change to most recent state
  useEffect(() => {
    chrome.action.setBadgeText({ text: String(messages.filter(message => message.read === false)?.length || "")});
  }, [messages]);

  // Function to run on storage change - set unread message count in state
  function logStorageChange(changes: UnreadCount) {
    setUnreadCount(changes.unreadCount.newValue?.unreadCount || 0);
  }

  // Add or remove an item from selected messages
  const selectMessage = (messageId: string) => {
    if (selectedMessages.includes(messageId)) {
      setSelectedMessages(selectedMessages.filter(message => message !== messageId));
      return;
    }

    setSelectedMessages([...selectedMessages, messageId]);
  }

  // If RTK is fetching, show loading screen 
  if (isLoading) {
    return (
      <LoadingPage />
    );
  }

  // If BE endpoint call returns error, show loading screen 
  if (error) {
    return (
      <ErrorPage />
    );
  }

  // If a message selected show the appropriate component
  if (activeMessage) {
    return (
      <ActiveMessage
        content={activeMessage.content}
        dateStr={activeMessage.timestamp}
        onClick={() => dispatch(setActiveMessage(undefined))}
      />
    );
  }

  // Deault return: messsage list
  return (
    <>
      <NavBar>
        <Header text="Messages" type="primary" />
        <Button label="Set read" onClick={() => dispatch(setMessagesRead(selectedMessages))} className="m-2" />
        {selectedMessages.length === messages.length ?
          <Button label="Deselect all" onClick={() => setSelectedMessages([])} className="mr-2" />
          :
          <Button label="Select all" onClick={() => setSelectedMessages(messages.map(message => message.id))} className="mr-2" />
        }
        {unreadCount > 0 &&
          <Button label="refresh" onClick={() => refetch()} className="mr-2" />
        }
        <Button label="Settings" onClick={() => setInSettings(true)} className="mr-2" />
      </NavBar>
      <div className='p-4'>
        {
          messages.length > 0 ? messages.map(message => {
            return (
              <MessageItem
                id={message.id}
                priority={message.priority}
                content={message.content}
                dateStr={message.timestamp}
                isRead={message.read}
                checked={selectedMessages?.includes(message.id)}
                onClick={() => {
                  dispatch(setMessagesRead([message.id]));
                  dispatch(setActiveMessage(message));
                }}
                onSelect={() => selectMessage(message.id)}
              />
            );
          })
          :
          <NoMessage />
        }
      </div>
    </>
  )
}
