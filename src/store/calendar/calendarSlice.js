
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
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) =>
        event._id === payload._id ? payload : event
      );
      state.activeEvent = null;
    }
  },
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent } = calendarSlice.actions;
