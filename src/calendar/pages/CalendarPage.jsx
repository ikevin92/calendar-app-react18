import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
import { Navbar } from '../';
import { localizer, getMessagesES } from '../../helpers';


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

  const eventStyleGetter = (event, start, end, isSelected) => {

    console.log(`🚀 ~ file: CalendarPage.jsx ~ line 26 ~ eventStyleGetter ~ event, start, end, isSelected`, event, start, end, isSelected);

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

  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={ { height: 'calc( 100vh - 80px )' } }
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
      />
    </>
  );
};