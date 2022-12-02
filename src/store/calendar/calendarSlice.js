
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
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent } = calendarSlice.actions;