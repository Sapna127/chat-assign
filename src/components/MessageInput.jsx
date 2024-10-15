// src/components/MessageInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField, Button } from '@mui/material';
import { sendMessage } from '../redux/slices/chat/chatSlice';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);  
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setIsSending(true);
      setTimeout(() => {
        dispatch(sendMessage(message));
        setMessage('');
        setIsSending(false);  
      }, 1000); 
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        sx={{ marginRight: '8px' }}
      />
      <Button variant="contained" onClick={handleSendMessage} disabled={isSending}>
        {isSending ? 'Sending...' : 'Send'}
      </Button>
    </Box>
  );
};

export default MessageInput;
