import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [
    { id: 1, text: 'Hello! How can I help you?', sender: 'bot', timestamp: new Date().toLocaleTimeString() },
  ],
  currentUser: 'user',
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        id: state.messages.length + 1,
        text: action.payload,
        sender: state.currentUser,
        timestamp: new Date().toLocaleTimeString(),
      });
    },
    receiveMessage: (state, action) => {
      state.messages.push({
        id: state.messages.length + 1,
        text: action.payload,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString(),
      });
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
