import React from 'react';
import { Box, Typography } from '@mui/material';

const Message = ({ message }) => {
  const isUser = message.sender === 'user';
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isUser ? 'row-reverse' : 'row',
        marginBottom: '8px',
      }}
    >
      <Box
        sx={{
          maxWidth: '60%',
          padding: '8px 12px',
          borderRadius: '8px',
          backgroundColor: isUser ? '#2196f3' : '#e0e0e0',
          color: isUser ? '#fff' : '#000',
        }}
      >
        <Typography variant="body1">{message.text}</Typography>
        <Typography variant="caption" align={isUser ? 'right' : 'left'}>
          {message.timestamp}
        </Typography>
      </Box>
    </Box>
  );
};

export default Message;