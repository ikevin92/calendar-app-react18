
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
    },
    onDeleteEvent: (state, /*payload*/) => {
      if (state.activeEvent) {
        state.events = state.events.filter((event) => event._id !== state.activeEvent._id);
        state.activeEvent = null;
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;
