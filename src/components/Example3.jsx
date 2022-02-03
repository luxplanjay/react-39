import { useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = () => {
  return createPortal(
    <div style={{ width: 600, height: 600, backgroundColor: 'blue' }}>
      Modal window
    </div>,
    document.querySelector('#modal-root')
  );
};

export const Example3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      style={{
        width: 300,
        height: 150,
        backgroundColor: 'orange',
        overflow: 'hidden',
      }}
    >
      <button onClick={() => setIsModalOpen(isOpen => !isOpen)}>
        Toggle modal
      </button>
      {isModalOpen && <Modal />}
    </div>
  );
};
