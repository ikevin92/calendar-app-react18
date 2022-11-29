import { useState } from 'react';
import Modal from 'react-modal';
import './CalendarModal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {

  const [isOpen, setIsOpen] = useState(true);

  const onCloseModal = () => {
    console.log('onclose');
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className={'modal'}
      overlayClassName={'modal-fondo'}
      closeTimeoutMS={200}
    >

      <h1>Hola mundo</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum alias ullam, aperiam saepe quas autem tenetur molestias assumenda modi, incidunt nulla fugiat, quam quia perferendis praesentium cumque minus accusamus!</p>
      <button onClick={onCloseModal}>Cerrar</button>

    </Modal>
  );
};