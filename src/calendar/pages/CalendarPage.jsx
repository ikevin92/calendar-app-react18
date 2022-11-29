import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
import { CalendarEvent, CalendarModal, Navbar } from '../';
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';


const events = [
  {
    title: 'Cumpleaños de la empresa',
    notes: 'Some notes',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Kevin',
    },
  },
];

export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#367cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };

    return {
      style,
    };

  };

  const onDoubleClick = (event) => {
    console.log(`🚀 ~ file: CalendarPage.jsx ~ line 42 ~ onDoubleClick ~ event`, event);
  };

  const onSelectEvent = (event) => {
    console.log(`🚀 ~ file: CalendarPage.jsx ~ line 47 ~ onSelectEvent ~ event`, event);
  };

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setLastView(event);
  };

  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChanged}
      />

      <CalendarModal />
    </>
  );
};