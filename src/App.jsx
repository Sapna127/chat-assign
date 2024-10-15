import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Typography } from '@mui/material';
import { receiveMessage } from '../src/redux/slices/chat/chatSlice';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const receiveMockMessage = () => {
      setTimeout(() => {
        dispatch(receiveMessage('I am a bot. How can I help you?'));
      }, 3000);
    };

    receiveMockMessage();
  }, [dispatch]);

  return (
    <Container maxWidth="sm" sx={{ marginTop: '16px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Chat App
      </Typography>
      <ChatWindow />
      <MessageInput />
    </Container>
  );
};

export default App;
