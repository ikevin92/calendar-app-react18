import { addHours } from 'date-fns';


export const mocks_event = {
  _id: new Date().getTime(),
  title: 'Cumpleaños de la empresa',
  notes: 'Some notes',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Kevin',
  },
};