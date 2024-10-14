import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../../interfaces/Message';
import baseApi from '../api';

export type MessagesState = {
  messages: Array<Message>,
  activeMessage?: Message,
};

const initialState : MessagesState = {
  messages: []
};

const slice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (
      state,
      { payload: messages }: PayloadAction<Array<Message>>
    ) => {
      state.messages = messages;
    },
    setMessagesRead: (
      state,
      { payload: messageIds }: PayloadAction<Array<string>>
    ) => {
      state.messages = state.messages.map(message => {
        if (messageIds && messageIds.includes(message.id)) {
          return{...message, read: true}
        }
        return message;
      })
    },
    setActiveMessage: (
        state,
        { payload: message }: PayloadAction<Message | undefined>
      ) => {
        state.activeMessage = message
      },
  }
});

const messages = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query<Array<Message>, void>({
      query: () => 'messages',
    }),
    setMessagesRead: builder.mutation<unknown, Array<string>>({
      query: (messageIds) => ({
        url: '/messages',
        method: 'POST',
        body: messageIds,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetMessagesQuery,
  useSetMessagesReadMutation,
} = messages;

export const { setMessages, setMessagesRead, setActiveMessage } = slice.actions;

export default slice.reducer;
