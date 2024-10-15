import { configureStore } from '@reduxjs/toolkit'
import chatReducer from '../redux/slices/chat/chatSlice';

export const store = configureStore({
  reducer: {
    chat:chatReducer
  }
})