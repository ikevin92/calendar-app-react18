
import { createSlice } from '@reduxjs/toolkit';
import { mocks_event } from '../../mocks/events';

const initialState = {
  events: [mocks_event],
  activeEvent: null,
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    action: (state, /*action*/) => {
      state.events += 1;
    }
  },
});

// Action creators are generated for each case reducer function
export const { action } = calendarSlice.actions;