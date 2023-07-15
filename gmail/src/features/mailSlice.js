import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sendMessageIsOpen: false,
  selectedMail: null, 
}
export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    selectMail: (state, action) => {
       state.selectedMail = action.payload;
    },
  },
});

export const {  selectMail, openSendMessage,  closeSendMessage } = mailSlice.actions; 
export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export default mailSlice.reducer;
