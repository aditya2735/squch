import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Host } from '../types/hotelTypes';

interface ChatState {
  hostData: Host | null;
  messages: { sender: string; text: string; timestamp: string }[];
}

const initialState: ChatState = {
  hostData: null,
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setHost: (state, action: PayloadAction<Host>) => {
      state.hostData = action.payload;
    },
    addMessage: (state, action: PayloadAction<{ sender: string; text: string; timestamp: string }>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setHost, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
